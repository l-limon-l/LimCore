<div align="center">

<img src="media/banner.jpg" alt="LimCore — клиент на Xray-core для Android и Windows" width="100%" />

### Один стиль. Два устройства. Ваши серверы.

[![Android](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Android%2Fmain%2Fupdate.json&query=%24.versionName&label=Android&logo=android&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Windows](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Desktop%2Fmain%2Fupdate.json&query=%24.version&label=Windows&logo=windows11&logoColor=white&color=f2f2f2&labelColor=161616&style=flat-square)](#скачать)
[![Xray-core](https://img.shields.io/badge/ядро-Xray--core-f2f2f2?style=flat-square&labelColor=161616)](https://github.com/XTLS/Xray-core)
[![Telegram](https://img.shields.io/badge/Telegram-@LimCoreChannel-f2f2f2?style=flat-square&logo=telegram&logoColor=white&labelColor=161616)](https://t.me/LimCoreChannel)

[Скачать](#скачать) · [Возможности](#возможности) · [Интерфейс](#интерфейс) · [Проверка файлов](#проверка-файлов) · [Что нового](#что-нового)

</div>

https://github.com/user-attachments/assets/7b351e5d-6c08-4696-b1db-3b3bd3532587

## Скачать

<!-- auto:download -->
<table>
  <tr>
    <td align="center" width="50%">
      <h3>Android</h3>
      <a href="https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-APK-f2f2f2?style=for-the-badge&logo=android&logoColor=white&labelColor=161616" alt="Скачать APK для Android" /></a>
      <p><b>2.1.3</b> · 08.10.2026 · 46,6 МБ<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="50%">
      <h3>Windows</h3>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-Setup.exe-f2f2f2?style=for-the-badge&logo=windows11&logoColor=white&labelColor=161616" alt="Скачать установщик для Windows" /></a>
      <p><b>2.4.3</b> · 08.10.2026 · 48,2 МБ<br /><sub>Установщик, обновляется сам</sub></p>
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
**Обновления:** оба приложения сами проверяют новые версии, скачивать заново вручную не нужно.

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
      Одинаковый интерфейс на Android и Windows, светлая и тёмная темы.
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
| `LimCore-Setup.exe` | <sub>`649167057207c28a1d96988e54f487e66c3c89a788df2d757fe3500af057fd93`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/649167057207c28a1d96988e54f487e66c3c89a788df2d757fe3500af057fd93) |
| `LimCore-universal.apk` | <sub>`ae409b3339f4b234464e5e6c600c92a3e4ed1dfe512a1a88cf5f0cfde5b50379`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/ae409b3339f4b234464e5e6c600c92a3e4ed1dfe512a1a88cf5f0cfde5b50379) |
| `LimCore-arm64-v8a.apk` | <sub>`30f7112a7b05122c585b2f9f9d0675d04835a859489938f8a63ac653cfc9f023`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/30f7112a7b05122c585b2f9f9d0675d04835a859489938f8a63ac653cfc9f023) |
| `LimCore-armeabi-v7a.apk` | <sub>`fd6297e8e71d4feac8e737b1b2ecccb5d42f9b72b71acd5a3dbb28354eb5bdf5`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/fd6297e8e71d4feac8e737b1b2ecccb5d42f9b72b71acd5a3dbb28354eb5bdf5) |
| `LimCore-x86_64.apk` | <sub>`fd8578fee48d671c86108a4504f5214b0b1101ff95ce4e9fb36adf554e1d0327`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/fd8578fee48d671c86108a4504f5214b0b1101ff95ce4e9fb36adf554e1d0327) |
<!-- /auto:hashes -->

```powershell
Get-FileHash .\LimCore-Setup.exe -Algorithm SHA256   # Windows
```

```bash
sha256sum LimCore-universal.apk                      # Linux, macOS, Termux
```

Таблица обновляется автоматически из `update.json` приложений: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/update.json) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/update.json).

## Что нового

<!-- auto:changes -->
**Android 2.1.3** · 08.10.2026

- Обновлены внутренние компоненты.

**Windows 2.4.3** · 08.10.2026

- Установщик в тёмной или светлой теме Windows.
<!-- /auto:changes -->

Полная история: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/CHANGELOG.md) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/CHANGELOG.md)

## Важно

> [!NOTE]
> **LimCore — только приложение.** Оно подключается к вашим собственным серверам и подпискам. Серверы, подписки и конфигурации я не предоставляю, не продаю и не раздаю.

Исходный код закрыт. Новости и релизы — в Telegram-канале [@LimCoreChannel](https://t.me/LimCoreChannel).

---

<details>
<summary><b>English</b></summary>

<br />

**LimCore** is a client app built on Xray-core for Android and Windows, with the same look on both: one-tap connect, server auto-select, ping test, subscriptions, per-app routing, fragmentation, mux, light and dark themes.

It only connects to *your own* servers and subscriptions. No servers or subscriptions are provided. The source code is closed; SHA-256 hashes and VirusTotal reports for every file are listed above.

**Download:** [Android (universal APK)](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) · [Windows (Setup.exe)](https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe)

</details>
