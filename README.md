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
      <p><b>2.0.0</b> · 07.10.2026 · 46,6 МБ<br /><sub>Android 8.0 и новее</sub></p>
    </td>
    <td align="center" width="50%">
      <h3>Windows</h3>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe"><img src="https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-Setup.exe-f2f2f2?style=for-the-badge&logo=windows11&logoColor=white&labelColor=161616" alt="Скачать установщик для Windows" /></a>
      <p><b>2.3.0</b> · 07.10.2026 · 36,1 МБ<br /><sub>Установщик, обновляется сам</sub></p>
    </td>
  </tr>
</table>
<!-- /auto:download -->

<details>
<summary><b>Сборки под конкретный процессор</b> — меньше по размеру</summary>

<!-- auto:abis -->
| Сборка | Для каких устройств | Размер |
|---|---|---|
| [arm64-v8a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-arm64-v8a.apk) | Почти все телефоны последних лет | 21,8 МБ |
| [armeabi-v7a](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-armeabi-v7a.apk) | Старые 32-битные телефоны | 22,3 МБ |
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
| `LimCore-Setup.exe` | <sub>`d8bdc9c78b35b9f258fe9156274852a5734dbb5fe10106af201bff0e32351989`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/d8bdc9c78b35b9f258fe9156274852a5734dbb5fe10106af201bff0e32351989) |
| `LimCore-universal.apk` | <sub>`d021b5e5c12e34d573c399076ddf103ebabef22d1d75394513fa5fe5af5967af`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/d021b5e5c12e34d573c399076ddf103ebabef22d1d75394513fa5fe5af5967af) |
| `LimCore-arm64-v8a.apk` | <sub>`c584961726040981f16c88c10e967d26383dd0ac027ac23be3f7bcb8c16fd157`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/c584961726040981f16c88c10e967d26383dd0ac027ac23be3f7bcb8c16fd157) |
| `LimCore-armeabi-v7a.apk` | <sub>`1c24a1e1f19e5ef987b86819b5c84817292c6687e7964f33b0122f3a071568b5`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/1c24a1e1f19e5ef987b86819b5c84817292c6687e7964f33b0122f3a071568b5) |
| `LimCore-x86_64.apk` | <sub>`dda8f86678eafbee479f936b4adf125a7482b63b028cd2d68e3c8460168e6145`</sub> | [VirusTotal](https://www.virustotal.com/gui/file/dda8f86678eafbee479f936b4adf125a7482b63b028cd2d68e3c8460168e6145) |
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
**Android 2.0.0** · 07.10.2026

- Добавлена настройка цветов для светлой и тёмной темы по отдельности.
- Добавлены готовые палитры, свой акцент и цвета обоев.
- Добавлены градиенты: миксы двух цветов, градиент кнопки подключения и фона.
- Любой цвет интерфейса меняется вручную.
- Добавлены экспорт и импорт цветов.

**Windows 2.3.0** · 07.10.2026

- Добавлена настройка цветов: палитры, градиенты и отдельные цвета для тёмной и светлой темы.
- Палитры импортируются и экспортируются через буфер обмена.
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
