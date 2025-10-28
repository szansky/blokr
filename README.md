# Blokr - Site Blocker  - "version": "1.0.0",

A simple browser extension to block access to specific websites. Supports multiple languages and custom blocklists.

---

## Features

- Block unwanted websites.
- Load blocklists from a URL or add sites manually.
- Supports multiple languages: English, Polish, German, Chinese, Russian, and French.
- Simple and intuitive user interface.

---

## Installation

### Chrome

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the folder with the extension files.

### Firefox

1. Download or clone this repository.
2. Create a ZIP file containing all the extension files.
3. Open Firefox and go to `about:debugging`.
4. Click **This Firefox** in the left menu.
5. Click **Load Temporary Add-on** and select the ZIP file you created.

---

## Usage

1. Open the extension by clicking its icon in the browser toolbar.
2. Choose an option:
   - **Load list from URL**: Enter a URL to a JSON file containing a list of sites to block.
   - **Add sites manually**: Enter the sites you want to block, separated by commas.
3. Click **Refresh rules** to apply the changes.

---

## Custom Blocklists

You can use your own blocklist by hosting a JSON file online and loading it via URL. Example format:

```json
[
  "*://*.pornhub.com/*",
  "*://pornhub.com/*",
  "*://*.xvideos.com/*",
  "*://xvideos.com/*"
]

Languages
The extension supports multiple languages. You can change the language in the extension popup.

Contributing
If you want to contribute to this project, feel free to fork the repository and submit a pull request.

License
This project is licensed under the MIT License.
