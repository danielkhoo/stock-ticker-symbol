# Nasdaq Stock Ticker Symbols

[![](https://img.shields.io/npm/v/stock-ticker-symbol.svg?style=flat)](https://github.com/danielkhoo/stock-ticker-symbol)
[![](https://img.shields.io/bundlephobia/min/stock-ticker-symbol.svg?style=flat)](https://github.com/danielkhoo/stock-ticker-symbol)

Utility to lookup and validate NASDAQ Ticker Symbols

If ticker symbol is valid returns the company name, otherwise it returns null.

## Install

`$ npm install stock-ticker-symbol`

## Usage

```js
const stocks = require('stock-ticker-symbol');

stocks.lookup('MSFT'); // Microsoft Corporation;

stocks.lookup('AAPL'); // Apple Inc.;

stocks.lookup('ABCD'); // null;
```

## License

MIT
