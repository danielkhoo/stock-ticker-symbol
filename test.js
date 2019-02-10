const stocks = require('./index');

stocks.lookup('MSFT'); // Microsoft Corporation;
stocks.lookup('AAPL'); // Apple Inc.;
stocks.lookup('ABCD'); // null;
