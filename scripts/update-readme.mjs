// Пересобирает автоматические блоки README.md из update.json приложений.
// Запуск: node scripts/update-readme.mjs (Node 18+)
import { readFile, writeFile } from 'node:fs/promises';

const RAW = 'https://raw.githubusercontent.com/l-limon-l';
const DL = 'https://github.com/l-limon-l';

const android = await getJson(`${RAW}/LimCore-Android/main/update.json`);
const windows = await getJson(`${RAW}/LimCore-Desktop/main/update.json`);
const linux = await getJson(`${RAW}/LimCore-Linux/main/update.json`);

const apk = (abi) => ({
  name: `LimCore-${abi}.apk`,
  url: `${DL}/LimCore-Android/raw/main/${android.apks[abi].file}`,
  size: android.apks[abi].size,
  sha256: android.apks[abi].sha256,
});
const exe = {
  name: 'LimCore-Setup.exe',
  url: `${DL}/LimCore-Desktop/raw/main/${windows.file}`,
  size: windows.size,
  sha256: windows.sha256,
};
const appimage = {
  name: 'LimCore-x86_64.AppImage',
  url: `${DL}/LimCore-Linux/raw/main/${linux.file}`,
  size: linux.size,
  sha256: linux.sha256,
};
// .deb и .rpm появились с Linux 2.4.6; в старом update.json их нет.
const linuxPackages = Object.entries(linux.packages || {}).map(([kind, p]) => ({
  kind,
  name: `LimCore-x86_64.${kind}`,
  url: `${DL}/LimCore-Linux/raw/main/${p.file}`,
  size: p.size,
  sha256: p.sha256,
}));
const apks = ['universal', 'arm64-v8a', 'armeabi-v7a', 'x86_64'].map(apk);
const universal = apks[0];

const mb = (bytes) => `${(bytes / 1048576).toFixed(1).replace('.', ',')} МБ`;
const date = (iso) => iso.split('-').reverse().join('.');
const badge = (label, message, logo) =>
  `https://img.shields.io/badge/${esc(label)}-${esc(message)}-f2f2f2?style=for-the-badge&logo=${logo}&logoColor=white&labelColor=161616`;
const esc = (s) => encodeURIComponent(s.replace(/-/g, '--').replace(/_/g, '__'));
const notes = (n) => n.ru.split('\n').map((l) => l.trim()).filter(Boolean).join('\n');

const blocks = {
  download: `
<table>
  <tr>
    <td align="center" width="33%">
      <h3>Android</h3>
      <a href="${universal.url}"><img src="${badge('Скачать', 'APK', 'android')}" alt="Скачать APK для Android" /></a>
      <p><b>${android.versionName}</b> · ${date(android.date)} · ${mb(universal.size)}<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="33%">
      <h3>Windows</h3>
      <a href="${exe.url}"><img src="${badge('Скачать', 'Setup.exe', 'windows11')}" alt="Скачать установщик для Windows" /></a>
      <p><b>${windows.version}</b> · ${date(windows.date)} · ${mb(exe.size)}<br /><sub>Установщик, обновляется сам</sub></p>
    </td>
    <td align="center" width="33%">
      <h3>Linux · Steam Deck</h3>
      <a href="${appimage.url}"><img src="${badge('Скачать', 'AppImage', 'linux')}" alt="Скачать AppImage для Linux и Steam Deck" /></a>
      <p><b>${linux.version}</b> · ${date(linux.date)} · ${mb(appimage.size)}<br /><sub>SteamOS, Arch, Fedora, Ubuntu 22.04 и новее</sub>${linuxPackages.length ? `<br /><sub>Пакеты: ${linuxPackages.map((p) => `<a href="${p.url}">.${p.kind}</a>`).join(' · ')}</sub>` : ''}</p>
    </td>
  </tr>
</table>
`,
  abis: `
| Сборка | Для каких устройств | Размер |
|---|---|---|
| [arm64-v8a](${apks[1].url}) | Почти все телефоны последних лет | ${mb(apks[1].size)} |
| [armeabi-v7a](${apks[2].url}) | Старые 32-битные телефоны | ${mb(apks[2].size)} |
| [x86_64](${apks[3].url}) | Эмуляторы и планшеты на x86 | ${mb(apks[3].size)} |
| [universal](${apks[0].url}) | Любое устройство | ${mb(apks[0].size)} |
`,
  changes: `
**Android ${android.versionName}** · ${date(android.date)}

${notes(android.notes)}

**Windows ${windows.version}** · ${date(windows.date)}

${notes(windows.notes)}

**Linux ${linux.version}** · ${date(linux.date)}

${notes(linux.notes)}
`,
  hashes: `
| Файл | SHA-256 | Проверка |
|---|---|---|
${[exe, appimage, ...linuxPackages, ...apks].map((f) => `| \`${f.name}\` | <sub>\`${f.sha256}\`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/${f.sha256}) |`).join('\n')}
`,
};

let readme = await readFile('README.md', 'utf8');
for (const [name, body] of Object.entries(blocks)) {
  const re = new RegExp(`(<!-- auto:${name} -->)[\\s\\S]*?(<!-- /auto:${name} -->)`);
  if (!re.test(readme)) throw new Error(`В README нет блока auto:${name}`);
  readme = readme.replace(re, `$1${body}$2`);
}
await writeFile('README.md', readme);
console.log(`Android ${android.versionName}, Windows ${windows.version}, Linux ${linux.version}`);

async function getJson(url) {
  // raw.githubusercontent.com кэширует файлы до 5 минут; запрос с меткой времени идёт мимо кэша,
  // поэтому запуск сразу после релиза видит новый update.json.
  const res = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}
