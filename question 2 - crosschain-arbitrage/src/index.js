require("dotenv").config();
const { ethers, JsonRpcProvider } = require("ethers");
const { swapOnUniswap, swapOnCurve } = require("./swap");

// Load environment variables
const privateKey = process.env.PRIVATE_KEY;
const arbitrumRpc = process.env.ARBITRUM_RPC;
const optimismRpc = process.env.OPTIMISM_RPC;

// Create providers for both blockchains
const arbitrumProvider = new JsonRpcProvider(
  `https://arb-mainnet.g.alchemy.com/v2/${arbitrumRpc}`
);
const optimismProvider = new JsonRpcProvider(
  `https://opt-mainnet.g.alchemy.com/v2/${optimismRpc}`
);

// Create signer (wallet) for both
const wallet = new ethers.Wallet(privateKey);
const arbitrumSigner = wallet.connect(arbitrumProvider);
const optimismSigner = wallet.connect(optimismProvider);

const uniswapRouter = "0xE592427A0AEce92De3Edee1F18E0157C05861564";
const curvePool = "0x45c562b0a4e2efc8768315e4eced54c46041f657";

const usdcArbitrum = "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
const usdtAbritrum = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";

async function main() {
  // Example amount: 5 USDC (6 decimals)
  const amountIn = ethers.parseUnits("5", 6);

  console.log("Starting trades on both chains...");

  await Promise.all([
    swapOnUniswap({
      signer: arbitrumSigner,
      routerAddress: uniswapRouter,
      tokenIn: usdcArbitrum,
      tokenOut: usdtAbritrum,
      amountIn,
    }),
    swapOnCurve({
      signer: optimismSigner,
      poolAddress: curvePool,
      amountIn,
    }),
  ]);

  console.log("Both trades complete!");
}

main().catch(console.error);
