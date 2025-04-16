/**
 * Asset Class Design
 *
 * Represents a tradable asset (token) that exists across multiple blockchains.
 * Each asset has a consistent identity but different contract addresses on different chains.
 */
class Asset {
  /**
   * Creates a new asset with its basic properties
   *
   * @param {string} id - Unique identifier for the asset
   * @param {string} symbol - Symbol/ticker of the asset (e.g., "ETH", "SOL")
   * @param {string} name - Full name of the asset (e.g., "Ethereum", "Solana")
   * @param {number} decimals - Number of decimal places for precision
   */
  constructor(id, symbol, name, decimals) {
    // Store basic asset properties
    // Initialize map to store addresses on different blockchains
  }

  /**
   * Register this asset's contract address on a specific blockchain
   *
   * For example, registering USDC's address on Ethereum and Polygon:
   * - addBlockchainAddress("ethereum", "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
   * - addBlockchainAddress("polygon", "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174")
   *
   * @param {string} blockchainId - ID of the blockchain
   * @param {string} contractAddress - Contract address on that blockchain
   */
  addBlockchainAddress(blockchainId, contractAddress) {
    // Store the address in the map using blockchain ID as key
  }

  /**
   * Retrieve this asset's contract address on a specific blockchain
   *
   * Used when constructing transactions or queries involving this asset
   * on a particular blockchain.
   *
   * @param {string} blockchainId - ID of the blockchain
   * @returns {string|undefined} - Contract address or undefined if not registered
   */
  getAddressOnBlockchain(blockchainId) {
    // Retrieve address from the map using blockchain ID as key
  }
}

module.exports = Asset;
