// ExchangeFactory.js
const UniswapHelper = require('./UniswapHelper');
const PancakeSwapHelper = require('./PancakeSwapHelper');

class ExchangeFactory {
  static getExchangeStrategy(exchangeType) {
    switch (exchangeType) {
      case 'Uniswap':
        return new UniswapHelper();
      case 'PancakeSwap':
        return new PancakeSwapHelper();
      default:
        throw new Error('Exchange type not supported');
    }
  }
}

module.exports = ExchangeFactory;
