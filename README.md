<div align="center">

<img src="media/banner.jpg" alt="LimCore — клиент на Xray-core для Android, Windows и Linux" width="100%" />

### Один стиль. Все устройства. Ваши серверы.

[![Android](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Android%2Fmain%2Fupdate.json&query=%24.versionName&label=Android&logo=android&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Windows](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Desktop%2Fmain%2Fupdate.json&query=%24.version&label=Windows&logo=windows11&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Linux](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Linux%2Fmain%2Fupdate.json&query=%24.version&label=Linux&logo=linux&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Xray-core](https://img.shields.io/badge/ядро-Xray--core-f2f2f2?style=flat-square&labelColor=161616)](https://github.com/XTLS/Xray-core)
[![Telegram](https://img.shields.io/badge/Telegram-@LimCoreChannel-f2f2f2?style=flat-square&logo=telegram&logoColor=white&labelColor=161616)](https://t.me/LimCoreChannel)

[Скачать](#скачать) · [Возможности](#возможности) · [Интерфейс](#интерфейс) · [Проверка файлов](#проверка-файлов) · [Что нового](#что-нового)

</div>

https://r2.e-z.host/ece2bcc4-a1d5-45e9-ab73-5b6817483b94/l0j16r6d.mp4

## Скачать

<!-- auto:download -->
<table>
  <tr>
    <td align="center" width="33%">
      <h3>Android</h3>
      <a href="https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-APK-f2f2f2?style=for-the-badge&logo=android&logoColor=white&labelColor=161616" alt="Скачать APK для Android" /></a>
      <p><b>2.1.4</b> · 09.10.2026 · 46,6 МБ<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="33%">
      <h3>Windows</h3>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-Setup.exe-f2f2f2?style=for-the-badge&logo=windows11&logoColor=white&labelColor=161616" alt="Скачать установщик для Windows" /></a>
      <p><b>2.4.8</b> · 09.10.2026 · 48,2 МБ<br /><sub>Установщик, обновляется сам</sub></p>
    </td>
    <td align="center" width="33%">
      <h3>Linux · Steam Deck</h3>
      <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/appimage/LimCore-x86_64.AppImage"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-AppImage-f2f2f2?style=for-the-badge&logo=linux&logoColor=white&labelColor=161616" alt="Скачать AppImage для Linux и Steam Deck" /></a>
      <p><b>2.5.5</b> · 09.10.2026 · 72,1 МБ<br /><sub>SteamOS, Arch, Fedora, Ubuntu 22.04 и новее</sub><br /><sub>Пакеты: <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/deb/LimCore-x86_64.deb">.deb</a> · <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/rpm/LimCore-x86_64.rpm">.rpm</a></sub></p>
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
| `LimCore-Setup.exe` | <sub>`ec25e9c071fe51df238d34bdd67520bbcfb6b3f7be05614be3c8d40418395fce`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/ec25e9c071fe51df238d34bdd67520bbcfb6b3f7be05614be3c8d40418395fce) |
| `LimCore-x86_64.AppImage` | <sub>`c3bedefa700fe549419ff86f791a4faaf8e9c1f8b46e47289cde0e832ed607c4`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/c3bedefa700fe549419ff86f791a4faaf8e9c1f8b46e47289cde0e832ed607c4) |
| `LimCore-x86_64.deb` | <sub>`315ea12ced1258cd64c6b725b8ceebecbf9c23842ac4ed90b3a9526ccfc8d5c9`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/315ea12ced1258cd64c6b725b8ceebecbf9c23842ac4ed90b3a9526ccfc8d5c9) |
| `LimCore-x86_64.rpm` | <sub>`a680a9f94faa794f84a46ab5f9b271d54e9952f577b877ccd572a34e9f7ef6e3`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/a680a9f94faa794f84a46ab5f9b271d54e9952f577b877ccd572a34e9f7ef6e3) |
| `LimCore-universal.apk` | <sub>`8335167645894821ce2ad18a4cbd0b310984fbf7bed2e85837a440996f5bb839`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/8335167645894821ce2ad18a4cbd0b310984fbf7bed2e85837a440996f5bb839) |
| `LimCore-arm64-v8a.apk` | <sub>`c28a9a27eb96d85bab5971fe0123b26f4c4d036585a642f4f167a419547eb74d`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/c28a9a27eb96d85bab5971fe0123b26f4c4d036585a642f4f167a419547eb74d) |
| `LimCore-armeabi-v7a.apk` | <sub>`dc1a5b6e28b8367064b5fefc9299b516b96773b3f0e201a83631f0d120cffaee`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/dc1a5b6e28b8367064b5fefc9299b516b96773b3f0e201a83631f0d120cffaee) |
| `LimCore-x86_64.apk` | <sub>`156015504afd25882622b9be6bf5bbf6b534c139ad901501978cc1a506d262a1`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/156015504afd25882622b9be6bf5bbf6b534c139ad901501978cc1a506d262a1) |
<!-- /auto:hashes -->

```powershell
Get-FileHash .\LimCore-Setup.exe -Algorithm SHA256   # Windows
```

```bash
sha256sum LimCore-x86_64.AppImage                    # Linux, macOS, Termux (так же .deb и .rpm)
```

Таблица обновляется автоматически из `update.json` приложений: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/update.json) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/update.json) · [Linux](https://github.com/l-limon-l/LimCore-Linux/blob/main/update.json).

## Что нового

<!-- auto:changes -->
**Android 2.1.4** · 09.10.2026

- Исправлена проверка задержки для серверов, которые не открывают сайт проверки.
- Исправлено автопереключение серверов в балансерах.

**Windows 2.4.8** · 09.10.2026

- Конфликтующее ПО проверяется и при открытии приложения.

**Linux 2.5.5** · 09.10.2026

- Конфликтующее ПО проверяется и при открытии приложения.
<!-- /auto:changes -->

Полная история: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/CHANGELOG.md) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/CHANGELOG.md) · [Linux](https://github.com/l-limon-l/LimCore-Linux/blob/main/CHANGELOG.md)

## Важно

> [!NOTE]
> **LimCore — только приложение.** Оно подключается к вашим собственным серверам и подпискам. Серверы, подписки и конфигурации я не предоставляю, не продаю и не раздаю.

Исходный код закрыт. Новости и релизы — в Telegram-канале [@LimCoreChannel](https://t.me/LimCoreChannel).

---

<details>
<summary><b>English</b></summary>

<br />

**LimCore** is a client app built on Xray-core for Android, Windows and Linux (Steam Deck included), with the same look everywhere: one-tap connect, server auto-select, ping test, subscriptions, per-app routing, fragmentation, mux, light and dark themes.

It only connects to *your own* servers and subscriptions. No servers or subscriptions are provided. The source code is closed; SHA-256 hashes and VirusTotal reports for every file are listed above.

**Download:** [Android (universal APK)](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) · [Windows (Setup.exe)](https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe) · [Linux / Steam Deck (AppImage)](https://github.com/l-limon-l/LimCore-Linux/raw/main/appimage/LimCore-x86_64.AppImage)

</details>
