# Crypto Calculator Changelog

## 1.2.0 (Jan 17, 2021)

Improvements
- Added Coin Gecko as a data provider for BTC price feed
- Added support for Apple Silicon hardware

Bugfixes 
- disabled rounding of news images

## 1.1.3 (Aug 12, 2020)

Improvements
- Increased BTC price watcher update interval time to 15 mins to address API limits
- BTC price watcher disabled by default

Bugfixes 
- 'last updated' time now shows correct value
  

## 1.1.2 (Aug 5, 2020)
Increased minimum required macOS version to 10.14

Improvements
- Added live BTC/USD price in status bar, updates every 5 mins (can be disabled in Prefs)
- UI tweaks

Bugfixes 
- Fixed onboarding issues, now works for macOS 10.14  

## 1.1.1 (May 26, 2020)
Increased minimum required macOS version to 10.13

Improvements
- Added new tab for crypto news feed

Bugfixes 
- Fixed bug which sometimes prevented onboarding from displaying


## 1.1.0 (May 16, 2020)
 Improvements
- New onboarding tour of app's features
- Keep app running with 'launch at login' option
- Improved support for Dark Mode

## 1.0.12 (May 8, 2020)
 Improvements
- Ticker cryptos can be displayed in any of the app's 98 fiats (configure in Preferences)
- Ticker and calculator now refresh immediately when Preferences updated
- Calculator and combobox elements alpha ordered
- Fixed UI glitches with truncated fields

IMPORTANT: In Preferences > General select 'restore defaults' to ensure unsuported currencies are cleared

Bugfixes 
- Fixed case when some fiat conversions were incorrect 
- Fixed case where API maximum currency count was exceeded
- Removed invalid cryptos and fiats to sync up with API updates
- Combobox correctly updates when new currencies added/removed

## 1.0.11 (Apr 29, 2020)
 Improvements
- Improved readability of fonts
- Updated crypto images and added 134 new cryptos

Bugfixes
- Fixed popover resizing for Ticker tab

## 1.0.10 (Jan 9, 2019)
- Updated popover so it's never greater than screen height
- Satisfied new API key requirement from CryptoCompare

## 1.0.9 (Jun 27, 2018)
- Added currency percentage change for last 24 hours in the Ticker view

## 1.0.8 (May 23, 2018)
- Fixed bug where Ticker view would be blank after network failure
- Popover resizes according to number of currencies displayed

## 1.0.7 (May 16, 2018)
- Updated to tabbed UI
- Added second tab: crypto ticker

## 1.0.6 (Mar 7, 2018)
- Customise currencies in Preferences
- Choose from 138 fiats and 242 crypto currencies
- Free version limited to 6 currencies
- Upgrade to access all currencies

## 1.0.5 (Feb 15, 2018)
- Added Preferences panel
- Added global keyboard shortcut to open CryptoCalculator (default shortcut: [ctrl][option][cmd] c)
- CryptoCalculator popover now opens on launch
- Fixed: alert sound no longer fires on every key press
- Fixed: removed ugly backgrounds when editing tableview currency cells

## 1.0.4 (Feb 9, 2018)
- CryptoCalculator icon hidden from app switcher
- Added Settings menu
- Added hover on tableview rows
- Improved typography
- Improved handling of network failure

## 1.0.3 (Feb 5, 2018)
- live conversion between cryptos and popular fiat currencies
- quickly select the crypto of your choice with auto-complete in the currency combobox
- most popular cryptos listed
- modify the result values to see your input value updated
- keyboard friendly for quick access
