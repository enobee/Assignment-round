require("dotenv").config();
const { JsonRpcProvider, ethers } = require("ethers");

// Environment variables with validation
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const senderPrivateKey = process.env.SENDER_PRIVATE_KEY;
const receiverAddress = process.env.RECEIVER_ADDRESS;

// Validate environment variables
if (!alchemyApiKey || !senderPrivateKey || !RECEIVER_ADDRESS) {
  console.error(
    "Missing environment variables. Make sure your .env file is set up correctly."
  );
}

const provider = new JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`
);

// Add 0x prefix if not present
const formattedPrivateKey = senderPrivateKey.startsWith("0x")
  ? senderPrivateKey
  : `0x${senderPrivateKey}`;
const wallet = new ethers.Wallet(formattedPrivateKey, provider);

// Counter to track blocks
let blockCount = 0;
const amountInWei = ethers.parseEther("0.001");

async function sendETH() {
  try {
    console.log("Sending 0.001 ETH...");

    // Transaction parameters
    const tx = await wallet.sendTransaction({
      to: receiverAddress,
      amountInWei,
    });

    console.log("Waiting for confirmation...");
    await tx.wait();

    console.log("Transaction confirmed! Hash:", tx.hash);
  } catch (err) {
    console.error("Transaction error:", err.message);
  }
}

// Listen to new blocks
provider.on("block", async (blockNumber) => {
  try {
    console.log("New Block:", blockNumber);
    blockCount++;

    if (blockCount % 10 === 0) {
      await sendETH();
    }
  } catch (err) {
    console.error("Listener error:", err.message);
  }
});
