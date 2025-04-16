# Question 1: Ethereum Block Listener - Auto ETH Sender

This Node.js script listens to new blocks on the Ethereum **Sepolia Testnet** using the Alchemy RPC and automatically sends **0.001 ETH** to a specified address **every 10th block**.

## Features

- Connects to Ethereum Sepolia testnet via Alchemy.
- Listens to new blocks in real-time.
- Sends 0.001 ETH to a specified address every 10 blocks.
- Uses `ethers.js` for blockchain interactions.
- Securely handles private key and RPC via `.env`.

## Installation

```bash
npm install dotenv ethers
```

## Environment Setup

Create a .env file in the root directory and add the following:

```env
ALCHEMY_API_KEY=your_sepolia_api_key_from_alchemy
SENDER_PRIVATE_KEY=your_private_key_without_quotes
RECEIVER_ADDRESS=receiver_wallet_address
```

## Usage

```bash
 node src/index.js
```

You'll see output like:

```bash
New Block: 8118259
Sending 0.001 ETH...
Waiting for confirmation...
Transaction confirmed! Hash: 0xabc123...
```

## Notes

- Ensure your sender wallet has Sepolia test ETH.
- The gas fee is charged on top of the 0.001 ETH.
- Script runs continuously and listens for new blocks on Sepolia.

## Tech Stack

- Node.js
- ethers.js
- dotenv
- Alchemy API

## License

MIT
