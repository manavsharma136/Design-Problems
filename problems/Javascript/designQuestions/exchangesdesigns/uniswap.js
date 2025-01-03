const ExchangeStrategy = require('./ExchangeStrategy');

class UniswapHelper extends ExchangeStrategy {
  swapTokens(tokenA, tokenB, amount) {
    console.log(`Swapping ${amount} of ${tokenA} for ${tokenB} on Uniswap`);
    // Uniswap-specific logic
  }
}

module.exports = UniswapHelper;
