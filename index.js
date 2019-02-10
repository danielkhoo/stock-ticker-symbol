const tickers = require('./tickerToName.json');

const lookup = input => {
  const ticker = input.toUpperCase();
  return tickers.hasOwnProperty(ticker) ? tickers[ticker].name : null;
};

module.exports = { lookup };
