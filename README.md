# URL Appender Chrome Extension

This simple Chrome extension automates the process of appending custom text to the end of website URLs.

## Use Case

This extension is perfect for anyone who needs to frequently access specific sections of websites by appending a consistent text pattern to the URL. For example, a WordPress administrator might use it to quickly access the admin panel by appending '/wp-admin'.

## Installation

1. **Download:** Download the source code of this extension (either as a ZIP file or by cloning the repository). 
2. **Edit `background.js`:** 
   * Find the line `newURL += 'wp-admin';`
   * Replace `/wp-admin` with the text you want to append (e.g., `/wp-admin`).
3. **Load in Chrome:**
   * Go to `chrome://extensions` in your Chrome browser.
   * Enable "Developer mode" in the top right corner.
   * Click "Load unpacked" and select the folder containing the extension's files.

## Usage

1. Once installed, the extension's icon will appear in your Chrome toolbar.
2. Navigate to any website where you want to append your custom text.
3. Click the extension's icon. The URL will automatically be modified.

## Notes

* This extension does not modify URLs that already end with your chosen text.
* It does not work on Chrome's internal pages (e.g., chrome://settings).

## Disclaimer

This extension was created using Gemini Advanced, and is provided as-is, without any guarantees or warranties. Use at your own discretion.
