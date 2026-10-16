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
      <p><b>2.1.11</b> · 16.10.2026 · 46,9 МБ<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="25%">
      <h3>Windows</h3>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-Setup.exe-f2f2f2?style=for-the-badge&logo=windows11&logoColor=white&labelColor=161616" alt="Скачать установщик для Windows" /></a>
      <p><b>2.5.9</b> · 12.10.2026 · 48,2 МБ<br /><sub>Установщик, обновляется сам</sub></p>
    </td>
    <td align="center" width="25%">
      <h3>Linux · Steam Deck</h3>
      <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/appimage/LimCore-x86_64.AppImage"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-AppImage-f2f2f2?style=for-the-badge&logo=linux&logoColor=white&labelColor=161616" alt="Скачать AppImage для Linux и Steam Deck" /></a>
      <p><b>2.5.8</b> · 09.10.2026 · 72,1 МБ<br /><sub>SteamOS, Arch, Fedora, Ubuntu 22.04 и новее</sub><br /><sub>Пакеты: <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/deb/LimCore-x86_64.deb">.deb</a> · <a href="https://github.com/l-limon-l/LimCore-Linux/raw/main/rpm/LimCore-x86_64.rpm">.rpm</a></sub></p>
    </td>
    <td align="center" width="25%">
      <h3>OpenWrt · роутеры</h3>
      <a href="#установка-на-роутер"><img src="https://img.shields.io/badge/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-install.sh-f2f2f2?style=for-the-badge&logo=openwrt&logoColor=white&labelColor=161616" alt="Установить LimCore на роутер с OpenWrt" /></a>
      <p><b>2.3.2</b> · 13.10.2026 · 0,3 МБ<br /><sub>OpenWrt 23.05 и новее, LuCI</sub><br /><sub>Пакеты: <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all.apk">.apk</a> · <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all.ipk">.ipk</a> · <a href="https://github.com/l-limon-l/LimCoreWRT/raw/main/packages/luci-app-limcore_all-legacy.ipk">-legacy.ipk</a></sub></p>
    </td>
  </tr>
</table>
<!-- /auto:download -->

<details>
<summary><b>Сборки под конкретный процессор</b> — меньше по размеру</summary>

<!-- auto:abis -->
| Сборка | Для каких устройств | Размер |
|---|---|---|
| [arm64-v8a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-arm64-v8a.apk) | Почти все телефоны последних лет | 22,2 МБ |
| [armeabi-v7a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-armeabi-v7a.apk) | Старые 32-битные телефоны | 22,7 МБ |
| [x86_64](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-x86_64.apk) | Эмуляторы и планшеты на x86 | 23,1 МБ |
| [universal](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) | Любое устройство | 46,9 МБ |
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
| `LimCore-Setup.exe` | <sub>`d7f80791802db94b1b82fc11e1a7b3b9a7236c7a99cd65a3194ade899665af44`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/d7f80791802db94b1b82fc11e1a7b3b9a7236c7a99cd65a3194ade899665af44) |
| `LimCore-x86_64.AppImage` | <sub>`3a40a5226a46794782d73d6891e9a6ebff45efc7e991b6337a6baec0eea1281b`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/3a40a5226a46794782d73d6891e9a6ebff45efc7e991b6337a6baec0eea1281b) |
| `LimCore-x86_64.deb` | <sub>`dea09ffa4cc3d0ede05c3fd4a1d1725de6467e27533c24d8efe8f652e64c28e4`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/dea09ffa4cc3d0ede05c3fd4a1d1725de6467e27533c24d8efe8f652e64c28e4) |
| `LimCore-x86_64.rpm` | <sub>`b62930f12266b6de4e8d64bce946a31443dfea3f2da12aca7962a69162714962`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/b62930f12266b6de4e8d64bce946a31443dfea3f2da12aca7962a69162714962) |
| `LimCore-universal.apk` | <sub>`8ce49621b2995520915f34d622b6b28c378e60dcbe4be4595514a56f8cafb64a`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/8ce49621b2995520915f34d622b6b28c378e60dcbe4be4595514a56f8cafb64a) |
| `LimCore-arm64-v8a.apk` | <sub>`181d7882ca8a45d8790b330a1e19fa09471cc133c6b888e1d3ac46d44ed016fd`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/181d7882ca8a45d8790b330a1e19fa09471cc133c6b888e1d3ac46d44ed016fd) |
| `LimCore-armeabi-v7a.apk` | <sub>`e848bfb5cc6f770509d767325b926cb4ff45a4653ecdfcf48f98e3487911ceaf`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/e848bfb5cc6f770509d767325b926cb4ff45a4653ecdfcf48f98e3487911ceaf) |
| `LimCore-x86_64.apk` | <sub>`5027273e91aadb7f888d5d183b843b82015a4bfed026dc01c7d2a5a0d0484179`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/5027273e91aadb7f888d5d183b843b82015a4bfed026dc01c7d2a5a0d0484179) |
| `luci-app-limcore_all.apk` | <sub>`49416adbf4d395069ac37c6400955c353691d1bc54382e215de32dffed69ae48`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/49416adbf4d395069ac37c6400955c353691d1bc54382e215de32dffed69ae48) |
| `luci-app-limcore_all.ipk` | <sub>`46c133d1c5213f3d7fe9f6a0b0dcb605956a0d68fdcb997cdc7cae1c1265d6c7`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/46c133d1c5213f3d7fe9f6a0b0dcb605956a0d68fdcb997cdc7cae1c1265d6c7) |
| `luci-app-limcore_all-legacy.ipk` | <sub>`5ef2dc5b762853540690d349c95d52a84da39bba94b361aab59120a559e68a7b`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/5ef2dc5b762853540690d349c95d52a84da39bba94b361aab59120a559e68a7b) |
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
**Android 2.1.11** · 16.10.2026

- В мем-настройках можно включить анимированный смайлик 😎 вместо щита на кнопке при подключённом VPN.

**Windows 2.5.9** · 12.10.2026

- Исправлено удаление LimCore: деинсталлятор больше не держит папку установки открытой.
- Исправлена возможная блокировка Uninstall.exe при тихом удалении.
- Если удаление не удалось, запись LimCore в списке установленных программ сохраняется, а тихий режим возвращает ошибку.

**Linux 2.5.8** · 09.10.2026

Исправлен вылет при изменении профиля маршрутизации.

**OpenWrt 2.3.2** · 13.10.2026

- Мультивыбор узлов: чекбоксы, выбор всех в открытой папке, групповая проверка задержки и скорости, перенос в папку и удаление с подтверждением.
- Флаги в списке узлов, обзоре и окне «Лучший узел» отображаются через локальный SVG-спрайт, независимо от emoji-шрифтов Windows и темы LuCI.
- Удалён дублирующий шрифт флагов; все изображения собраны в один файл для экономии места на роутере.
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
