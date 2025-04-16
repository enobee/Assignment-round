const { ethers } = require("ethers");
import { uniswapRouterAbi, curvePoolAbi } from "./abis.js";

async function swapOnUniswap({
  signer,
  routerAddress,
  tokenIn,
  tokenOut,
  amountIn,
}) {
  const router = new ethers.Contract(routerAddress, uniswapRouterAbi, signer);

  const params = {
    tokenIn,
    tokenOut,
    fee: 500, // 0.05% fee tier
    recipient: await signer.getAddress(),
    deadline: Math.floor(Date.now() / 1000) + 300,
    amountIn,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  };

  const tx = await router.exactInputSingle(params, { gasLimit: 500000 });
  const receipt = await tx.wait();
  console.log("Uniswap trade on Arbitrum complete");
  return receipt;
}

async function swapOnCurve({ signer, poolAddress, amountIn }) {
  const curve = new ethers.Contract(poolAddress, curvePoolAbi, signer);
  const i = 2; // USDT
  const j = 1; // USDC

  const tx = await curve.exchange(i, j, amountIn, 0, { gasLimit: 500000 });
  const receipt = await tx.wait();
  console.log("Curve trade on Optimism complete");
  return receipt;
}

module.exports = {
  swapOnUniswap,
  swapOnCurve,
};
