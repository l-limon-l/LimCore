<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=220&section=header&text=LimCore&fontSize=80&fontAlignY=38&desc=Клиент%20на%20Xray-core%20для%20Android%20и%20Windows&descAlignY=60" alt="LimCore" />

**Один стиль. Два устройства. Ваши серверы.**

[![Android](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Android%2Fmain%2Fupdate.json&query=%24.versionName&label=Android&logo=android&logoColor=white&color=3DDC84&style=for-the-badge)](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk)
[![Windows](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-limon-l%2FLimCore-Desktop%2Fmain%2Fupdate.json&query=%24.version&label=Windows&logo=windows11&logoColor=white&color=0078D4&style=for-the-badge)](https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe)
[![Telegram](https://img.shields.io/badge/Telegram-LimCore-26A5E4?logo=telegram&logoColor=white&style=for-the-badge)](https://t.me/LimCoreChannel)

</div>

---

## 🎬 Ролик

<div align="center">
  <video src="https://github.com/l-limon-l/LimCore/raw/main/media/limcore-film.mp4" poster="https://github.com/l-limon-l/LimCore/raw/main/media/poster.jpg" controls muted width="100%"></video>
  <p><sub>Если видео не загрузилось — <a href="https://github.com/l-limon-l/LimCore/raw/main/media/limcore-film.mp4">открыть файл напрямую</a></sub></p>
</div>

---

## ⬇️ Скачать

<table align="center">
  <tr>
    <td align="center" width="50%">
      <h3>🤖 Android</h3>
      <p>Android 8.0 и новее</p>
      <a href="https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk">
        <img src="https://img.shields.io/badge/Скачать-universal.apk-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Скачать universal.apk" />
      </a>
      <p><sub>Подходит для любого телефона · ~46 МБ</sub></p>
    </td>
    <td align="center" width="50%">
      <h3>🪟 Windows</h3>
      <p>Установщик</p>
      <a href="https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe">
        <img src="https://img.shields.io/badge/Скачать-Setup.exe-0078D4?style=for-the-badge&logo=windows11&logoColor=white" alt="Скачать Setup.exe" />
      </a>
      <p><sub>Устанавливается и обновляется сам · ~36 МБ</sub></p>
    </td>
  </tr>
</table>

<details>
<summary><b>Другие сборки для Android</b> (меньше размер)</summary>

<br>

| Архитектура | Для каких устройств | Файл |
|---|---|---|
| **arm64-v8a** | Почти все современные телефоны | [LimCore-arm64-v8a.apk](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-arm64-v8a.apk) |
| **armeabi-v7a** | Старые 32-битные телефоны | [LimCore-armeabi-v7a.apk](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-armeabi-v7a.apk) |
| **x86_64** | Эмуляторы и Android-планшеты на x86 | [LimCore-x86_64.apk](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-x86_64.apk) |
| **universal** | Не уверены — берите эту | [LimCore-universal.apk](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) |

</details>

Список изменений: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/CHANGELOG.md) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/CHANGELOG.md)

---

## ✨ Возможности

- 🛡 **Ядро Xray-core** — поддержка VLESS и других протоколов Xray
- 🎯 **Автовыбор сервера** и **тест пинга** — быстро находит лучший вариант
- ⚙️ **Тонкая настройка** — фрагментация, мультиплексор, маршрутизация, MTU, IPv6
- 📱 **Раздельное туннелирование** — выбирайте приложения, которые работают через подключение, а какие напрямую
- 🎨 **Material You**, тёмная и светлая темы
- 🔁 **Одинаковый интерфейс** на Android и Windows
- 🔄 **Автообновления** — приложение само проверяет и ставит новые версии

## 🔐 Проверка файлов

Закрытый исходный код — повод проверять то, что вы скачиваете. Сверьте хеш файла с таблицей ниже:

```powershell
# Windows (PowerShell)
Get-FileHash .\LimCore-Setup.exe -Algorithm SHA256
```

```bash
# Linux / macOS / Termux
sha256sum LimCore-universal.apk
```

| Файл | SHA-256 |
|---|---|
| `LimCore-universal.apk` | `54cb02b4cbc6729659450cfae86969fff6e3152aa5f41f0c7140022d5bdb6665` |
| `LimCore-arm64-v8a.apk` | `acaaf3258cf795df580ad68cc61a47237aa3910cebf8e0bd90300835f643f22d` |
| `LimCore-armeabi-v7a.apk` | `b7a477681a7d6a24fc983bf0a45a2e481068230bfd34fc54214595a74d6c906a` |
| `LimCore-x86_64.apk` | `aab040b745edfba605db4b379676cfbfb5c6c904688bf3b4e6b2b5b1efe81216` |
| `LimCore-Setup.exe` | `152bbe659e85cc1ea8798c892bbc3be08e921463d0224ec08835252751fa965c` |

Хеш любого файла можно вставить в поиск [VirusTotal](https://www.virustotal.com/gui/home/search), чтобы посмотреть отчёт.

> Актуальные хеши всегда в `update.json`: [Android](https://github.com/l-limon-l/LimCore-Android/blob/main/update.json) · [Windows](https://github.com/l-limon-l/LimCore-Desktop/blob/main/update.json). Если таблица выше отстала от релиза, ориентируйтесь на них.

## ℹ️ Важно

**LimCore — только клиент.** Приложение подключается к вашим собственным серверам и подпискам. Серверы, подписки и конфигурации я не предоставляю, не продаю и не раздаю.

Исходный код закрыт.

## 📣 Связь

- Telegram-канал с новостями: [@LimCoreChannel](https://t.me/LimCoreChannel)
- GitHub: [l-limon-l](https://github.com/l-limon-l)

---

<div align="center">

### English

**LimCore** is a client app built on Xray-core for Android and Windows, with the same look on both.
It only connects to *your own* servers and subscriptions — no servers or subscriptions are provided.
Closed source.

[⬇ Android (universal.apk)](https://github.com/l-limon-l/LimCore-Android/raw/main/apk/LimCore-universal.apk) ·
[⬇ Windows (Setup.exe)](https://github.com/l-limon-l/LimCore-Desktop/raw/main/installer/LimCore-Setup.exe)

</div>
