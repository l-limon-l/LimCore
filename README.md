<div align="center">

<img src="media/banner.jpg" alt="LimCore — клиент на Xray-core для Android, Windows и Linux, приложение для роутеров OpenWrt" width="100%" />

### Один стиль. Все устройства. Ваши серверы.

[![Android](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Android%2Fmain%2Fupdate.json&query=%24.versionName&label=Android&logo=android&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Windows](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Desktop%2Fmain%2Fupdate.json&query=%24.version&label=Windows&logo=windows11&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Linux](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Linux%2Fmain%2Fupdate.json&query=%24.version&label=Linux&logo=linux&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![OpenWrt](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCoreWRT%2Fmain%2Fupdate.json&query=%24.version&label=OpenWrt&logo=openwrt&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Xray-core](https://img.shields.io/badge/ядро-Xray--core-f2f2f2?style=flat-square&labelColor=161616)](https://github.com/XTLS/Xray-core)
[![Telegram](https://img.shields.io/badge/Telegram-@LimCoreChannel-f2f2f2?style=flat-square&logo=telegram&logoColor=white&labelColor=161616)](https://t.me/LimCoreChannel)

[Скачать](#скачать) · [Возможности](#возможности) · [Интерфейс](#интерфейс) · [Проверка файлов](#проверка-файлов) · [Что нового](#что-нового)

</div>

https://github.com/user-attachments/assets/ca1b69c9-05c6-4086-bf7d-161719925178

## Скачать

<!-- auto:download -->
<table>
  <tr>
    <td align="center" width="25%">
      <h3>Android</h3>
      <a href="https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-APK-f2f2f2?style=for-the-badge&logo=android&logoColor=white&labelColor=161616" alt="Скачать APK для Android" /></a>
      <p><b>2.1.4</b> · 09.10.2026 · 46,6 МБ<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="25%">
      <h3>Windows</h3>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-Setup.exe-f2f2f2?style=for-the-badge&logo=windows11&logoColor=white&labelColor=161616" alt="Скачать установщик для Windows" /></a>
      <p><b>2.5.7</b> · 09.10.2026 · 48,2 МБ<br /><sub>Установщик, обновляется сам</sub></p>
    </td>
    <td align="center" width="25%">
      <h3>Linux · Steam Deck</h3>
      <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/appimage/LimCore-x86_64.AppImage"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-AppImage-f2f2f2?style=for-the-badge&logo=linux&logoColor=white&labelColor=161616" alt="Скачать AppImage для Linux и Steam Deck" /></a>
      <p><b>2.5.7</b> · 09.10.2026 · 72,1 МБ<br /><sub>SteamOS, Arch, Fedora, Ubuntu 22.04 и новее</sub><br /><sub>Пакеты: <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/deb/LimCore-x86_64.deb">.deb</a> · <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/rpm/LimCore-x86_64.rpm">.rpm</a></sub></p>
    </td>
    <td align="center" width="25%">
      <h3>OpenWrt · роутеры</h3>
      <a href="#установка-на-роутер"><img src="https://img.shields.io/badge/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-install.sh-f2f2f2?style=for-the-badge&logo=openwrt&logoColor=white&labelColor=161616" alt="Установить LimCore на роутер с OpenWrt" /></a>
      <p><b>2.1.0</b> · 09.10.2026 · 0,3 МБ<br /><sub>OpenWrt 23.05 и новее, LuCI</sub><br /><sub>Пакеты: <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all.apk">.apk</a> · <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all.ipk">.ipk</a> · <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all-legacy.ipk">-legacy.ipk</a></sub></p>
    </td>
  </tr>
</table>
<!-- /auto:download -->

<details>
<summary><b>Сборки под конкретный процессор</b> — меньше по размеру</summary>

<!-- auto:abis -->
| Сборка | Для каких устройств | Размер |
|---|---|---|
| [arm64-v8a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-arm64-v8a.apk) | Почти все телефоны последних лет | 21,9 МБ |
| [armeabi-v7a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-armeabi-v7a.apk) | Старые 32-битные телефоны | 22,4 МБ |
| [x86_64](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-x86_64.apk) | Эмуляторы и планшеты на x86 | 22,8 МБ |
| [universal](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) | Любое устройство | 46,6 МБ |
<!-- /auto:abis -->

Не знаете, какая нужна, — берите **universal**, она работает везде.

</details>

**Установка на Android:** скачайте APK, откройте его и разрешите установку из этого источника, если телефон спросит.
**Установка на Linux и Steam Deck:** скачайте AppImage, разрешите его запуск (Свойства → Права → Исполняемый) и откройте: запустится установщик. На Steam Deck установка идёт в режиме рабочего стола; для службы TUN нужен пароль пользователя, его задают в Konsole командой `passwd`. После установки LimCore появляется в библиотеке Steam и работает в игровом режиме.
**Пакеты .deb и .rpm:** для Debian, Ubuntu и Linux Mint — `sudo apt install ./LimCore-x86_64.deb`, для Fedora и openSUSE — `sudo dnf install ./LimCore-x86_64.rpm` (или `zypper`). Служба TUN настраивается при установке пакета.
**Обновления:** все приложения сами проверяют новые версии, скачивать заново вручную не нужно.

### Установка на роутер

LimCore для OpenWrt 23.05 и новее: приложение LuCI на ядре sing-box, с ByeDPI и Zapret. Выполните команду на роутере по SSH, установщик сам выберет пакет под версию OpenWrt и поставит ядро:

<!-- auto:install -->
```sh
wget -qO- https://raw.githubusercontent.com/l-limon-l/LimCoreWRT/main/install.sh | sh
```
<!-- /auto:install -->

После установки LimCore открывается в LuCI: **Службы → LimCore**. Обновления ставятся из интерфейса или сами по расписанию.

## Возможности

<table>
  <tr>
    <td width="50%" valign="top">
      <b>⚡ Один тап до подключения</b><br />
      Автовыбор сервера и тест пинга сами находят лучший вариант.
    </td>
    <td width="50%" valign="top">
      <b>📥 Подписки</b><br />
      Импорт подписок и ссылок, автообновление, остаток трафика и срок действия.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>🧩 Ядро Xray-core</b><br />
      VLESS, REALITY и другие протоколы Xray, конфигурации в JSON.
    </td>
    <td valign="top">
      <b>⚙️ Тонкая настройка</b><br />
      Фрагментация, мультиплексор, маршрутизация, MTU, IPv6.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>📱 Раздельное туннелирование</b><br />
      Выберите приложения, которые работают через подключение, а какие напрямую.
    </td>
    <td valign="top">
      <b>🎨 Один стиль</b><br />
      Одинаковый интерфейс на Android, Windows и Linux, светлая и тёмная темы.
    </td>
  </tr>
</table>

## Интерфейс

<img src="media/windows.jpg" alt="LimCore для Windows: тёмная и светлая темы" width="100%" />

<img src="media/settings-android.jpg" alt="Настройки LimCore для Windows и главный экран LimCore для Android" width="100%" />

## Проверка файлов

Исходный код закрыт, поэтому для каждого файла опубликован SHA-256. Сравните его с хешем скачанного файла или откройте готовый отчёт VirusTotal:

<!-- auto:hashes -->
| Файл | SHA-256 | Проверка |
|---|---|---|
| `LimCore-Setup.exe` | <sub>`a9918763983b65dc3a5b19c973c66c862d3fb50c514790220f65aaae821e02bc`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/a9918763983b65dc3a5b19c973c66c862d3fb50c514790220f65aaae821e02bc) |
| `LimCore-x86_64.AppImage` | <sub>`31c76c8fecb768a266bc8a553818560eec1b2cedf40e93ce6fe17b7516193443`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/31c76c8fecb768a266bc8a553818560eec1b2cedf40e93ce6fe17b7516193443) |
| `LimCore-x86_64.deb` | <sub>`fdc2da48882836b2e80a1c58e4f2d7248724de1b39460eb0c96b92da749a4271`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/fdc2da48882836b2e80a1c58e4f2d7248724de1b39460eb0c96b92da749a4271) |
| `LimCore-x86_64.rpm` | <sub>`ef20236b6d714df6b1e058c4e571f3ab2e911f9ebc924c8d7b1a260d1d9f396b`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/ef20236b6d714df6b1e058c4e571f3ab2e911f9ebc924c8d7b1a260d1d9f396b) |
| `LimCore-universal.apk` | <sub>`8335167645894821ce2ad18a4cbd0b310984fbf7bed2e85837a440996f5bb839`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/8335167645894821ce2ad18a4cbd0b310984fbf7bed2e85837a440996f5bb839) |
| `LimCore-arm64-v8a.apk` | <sub>`c28a9a27eb96d85bab5971fe0123b26f4c4d036585a642f4f167a419547eb74d`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/c28a9a27eb96d85bab5971fe0123b26f4c4d036585a642f4f167a419547eb74d) |
| `LimCore-armeabi-v7a.apk` | <sub>`dc1a5b6e28b8367064b5fefc9299b516b96773b3f0e201a83631f0d120cffaee`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/dc1a5b6e28b8367064b5fefc9299b516b96773b3f0e201a83631f0d120cffaee) |
| `LimCore-x86_64.apk` | <sub>`156015504afd25882622b9be6bf5bbf6b534c139ad901501978cc1a506d262a1`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/156015504afd25882622b9be6bf5bbf6b534c139ad901501978cc1a506d262a1) |
| `luci-app-limcore_all.apk` | <sub>`581854b233a20ca80861796fb852dd60d22eae999df67bb87a222c494662e0d2`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/581854b233a20ca80861796fb852dd60d22eae999df67bb87a222c494662e0d2) |
| `luci-app-limcore_all.ipk` | <sub>`9c960ab742efe4443abe440776746b2f7e79856c143a6c1c48fcef0232a8dd26`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/9c960ab742efe4443abe440776746b2f7e79856c143a6c1c48fcef0232a8dd26) |
| `luci-app-limcore_all-legacy.ipk` | <sub>`a92e1282fa9fd430ba516b43e6dc40d9ff734c83f6f79e8cd0f6861a3c0c3f14`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/a92e1282fa9fd430ba516b43e6dc40d9ff734c83f6f79e8cd0f6861a3c0c3f14) |
<!-- /auto:hashes -->

```powershell
Get-FileHash .\LimCore-Setup.exe -Algorithm SHA256   # Windows
```

```bash
sha256sum LimCore-x86_64.AppImage                    # Linux, macOS, Termux (так же .deb и .rpm)
```

Таблица обновляется автоматически из `update.json` приложений: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/update.json) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/update.json) · [Linux](https://github.com/l-limon-l/LimCore-Linux/blob/main/update.json) · [OpenWrt](https://github.com/l-limon-l/LimCoreWRT/blob/main/update.json).

## Что нового

<!-- auto:changes -->
**Android 2.1.4** · 09.10.2026

- Исправлена проверка задержки для серверов, которые не открывают сайт проверки.
- Исправлено автопереключение серверов в балансерах.

**Windows 2.5.7** · 09.10.2026

- Добавлен переключатель системной рамки окна в настройках интерфейса.

**Linux 2.5.7** · 09.10.2026

- Добавлен переключатель системной рамки окна в настройках интерфейса.

**OpenWrt 2.1.0** · 09.10.2026

- Обновления скачиваются из файлов репозитория LimCoreWRT, а не из GitHub Releases.
- Пакеты проверяются по размеру и SHA-256 перед установкой.
- Сохранение настроек, обновление и добавление подписок больше не перезапускают firewall и DNS: ядро перечитывает конфиг без остановки.
- Если в подписке ничего не изменилось, соединение не прерывается.
- При переподключении WAN перезапускается только ядро.
<!-- /auto:changes -->

Полная история: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/CHANGELOG.md) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/CHANGELOG.md) · [Linux](https://github.com/l-limon-l/LimCore-Linux/blob/main/CHANGELOG.md) · [OpenWrt](https://github.com/l-limon-l/LimCoreWRT/blob/main/CHANGELOG.md)

## Важно

> [!NOTE]
> **LimCore — только приложение.** Оно подключается к вашим собственным серверам и подпискам. Серверы, подписки и конфигурации я не предоставляю, не продаю и не раздаю.

Исходный код закрыт. Новости и релизы — в Telegram-канале [@LimCoreChannel](https://t.me/LimCoreChannel).

---

<details>
<summary><b>English</b></summary>

<br />

**LimCore** is a client app built on Xray-core for Android, Windows and Linux (Steam Deck included), with the same look everywhere, plus a LuCI app for OpenWrt routers: one-tap connect, server auto-select, ping test, subscriptions, per-app routing, fragmentation, mux, light and dark themes.

It only connects to *your own* servers and subscriptions. No servers or subscriptions are provided. The source code is closed; SHA-256 hashes and VirusTotal reports for every file are listed above.

**Download:** [Android (universal APK)](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) · [Windows (Setup.exe)](https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe) · [Linux / Steam Deck (AppImage)](https://github.com/l-limon-l/LimCore-Linux/raw/main/appimage/LimCore-x86_64.AppImage) · OpenWrt: `wget -qO- https://raw.githubusercontent.com/l-limon-l/LimCoreWRT/main/install.sh | sh`

</details>
