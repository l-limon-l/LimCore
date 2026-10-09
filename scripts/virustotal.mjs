// Отправляет на VirusTotal APK, установщик, AppImage, пакеты Linux и OpenWrt из update.json приложений, которых там ещё нет,
// чтобы ссылки «VirusTotal» в README вели на готовый отчёт.
// Запуск: VT_API_KEY=… node scripts/virustotal.mjs (Node 18+)
//
// Бесплатный ключ: 4 запроса в минуту, 500 в день, 15,5 тыс. в месяц. Запросы идут не чаще раза
// в 16 с; уже известный файл стоит один запрос (поиск по SHA-256), новый ещё один-два (адрес для
// большого файла и сама загрузка). Скачивание файлов с GitHub в лимит не входит.
const KEY = process.env.VT_API_KEY;
if (!KEY) {
  console.log('VT_API_KEY не задан, пропускаю');
  process.exit(0);
}

const RAW = 'https://raw.githubusercontent.com/l-limon-l';
const VT = 'https://www.virustotal.com/api/v3';
const GAP_MS = 16_000;
// Больше 32 МБ файл загружается по отдельному одноразовому адресу.
const DIRECT_LIMIT = 32 * 1024 * 1024;

const android = await getJson(`${RAW}/LimCore-Android/main/update.json`);
const windows = await getJson(`${RAW}/LimCore-Desktop/main/update.json`);
const linux = await getJson(`${RAW}/LimCore-Linux/main/update.json`);
const wrt = await getJson(`${RAW}/LimCoreWRT/main/update.json`);
const files = [
  { name: 'LimCore-Setup.exe', url: `${RAW}/LimCore-Desktop/main/${windows.file}`, sha256: windows.sha256 },
  { name: 'LimCore-x86_64.AppImage', url: `${RAW}/LimCore-Linux/main/${linux.file}`, sha256: linux.sha256 },
  ...Object.entries(linux.packages || {}).map(([kind, p]) => ({
    name: `LimCore-x86_64.${kind}`,
    url: `${RAW}/LimCore-Linux/main/${p.file}`,
    sha256: p.sha256,
  })),
  ...['apk', 'ipk', 'ipk_legacy'].map((kind) => ({
    name: wrt.packages[kind].file.split('/').pop(),
    url: `${RAW}/LimCoreWRT/main/${wrt.packages[kind].file}`,
    sha256: wrt.packages[kind].sha256,
  })),
  ...['universal', 'arm64-v8a', 'armeabi-v7a', 'x86_64'].map((abi) => ({
    name: `LimCore-${abi}.apk`,
    url: `${RAW}/LimCore-Android/main/${android.apks[abi].file}`,
    sha256: android.apks[abi].sha256,
  })),
];

let last = 0;
async function vt(path, options = {}) {
  const wait = last + GAP_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  last = Date.now();
  const url = path.startsWith('http') ? path : `${VT}${path}`;
  return fetch(url, { ...options, headers: { 'x-apikey': KEY, ...(options.headers || {}) } });
}

let failed = 0;
for (const f of files) {
  const known = await vt(`/files/${f.sha256}`);
  if (known.ok) {
    console.log(`${f.name}: уже на VirusTotal`);
    continue;
  }
  if (known.status !== 404) {
    console.log(`${f.name}: VirusTotal ответил ${known.status}, пропускаю`);
    failed++;
    continue;
  }
  const bytes = Buffer.from(await (await fetch(`${f.url}?t=${Date.now()}`)).arrayBuffer());
  let endpoint = '/files';
  if (bytes.length > DIRECT_LIMIT) {
    const res = await vt('/files/upload_url');
    if (!res.ok) {
      console.log(`${f.name}: адрес для загрузки не выдан (${res.status})`);
      failed++;
      continue;
    }
    endpoint = (await res.json()).data;
  }
  const form = new FormData();
  form.append('file', new Blob([bytes]), f.name);
  const res = await vt(endpoint, { method: 'POST', body: form });
  if (res.ok) console.log(`${f.name}: отправлен на проверку (${(bytes.length / 1048576).toFixed(1)} МБ)`);
  else {
    console.log(`${f.name}: загрузка не удалась (${res.status}) ${await res.text()}`);
    failed++;
  }
}
if (failed) process.exitCode = 1;

async function getJson(url) {
  const res = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}
