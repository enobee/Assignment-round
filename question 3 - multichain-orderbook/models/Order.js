/**
 * Order Types and Status Definitions
 *
 * The system supports two order types and multiple status states
 * to track an order throughout its lifecycle.
 */

/**
 * Represents an order type (BUY or SELL)
 * @enum {string}
 */
const OrderType = {
  BUY: "BUY", // Order to buy an asset
  SELL: "SELL", // Order to sell an asset
};

/**
 * Represents the current status of an order
 * @enum {string}
 */
const OrderStatus = {
  PENDING: "PENDING", // Order created but not yet confirmed on blockchain
  ACTIVE: "ACTIVE", // Order is active in the order book
  PARTIALLY_FILLED: "PARTIALLY_FILLED", // Order partially filled
  FILLED: "FILLED", // Order completely filled
  CANCELLED: "CANCELLED", // Order was cancelled
  FAILED: "FAILED", // Order failed (e.g., due to blockchain errors)
};

/**
 * Order Class Design
 *
 * Represents a single order in the multichain orderbook system.
 * Each order specifies an exchange between two assets across two blockchains.
 */
class Order {
  /**
   * Creates a new order for cross-chain trading
   *
   * @param {string} id - Unique identifier for the order
   * @param {string} maker - Address of the order creator
   * @param {string} orderType - BUY or SELL from OrderType enum
   * @param {Object} baseAsset - The asset being sold/bought
   * @param {Object} quoteAsset - The asset used for pricing
   * @param {Object} baseBlockchain - Blockchain where the baseAsset exists
   * @param {Object} quoteBlockchain - Blockchain where the quoteAsset exists
   * @param {number} amount - Amount of baseAsset to trade
   * @param {number} price - Price in quoteAsset per unit of baseAsset
   * @param {number} [expirationTime=0] - When the order expires (0 for no expiration)
   */
  constructor(
    id,
    maker,
    orderType,
    baseAsset,
    quoteAsset,
    baseBlockchain,
    quoteBlockchain,
    amount,
    price,
    expirationTime = 0
  ) {
    // Implementation would:
    // - Validate order parameters (ensure not trading same asset on same blockchain)
    // - Initialize order properties
    // - Set initial status to PENDING
  }

  /**
   * Get the remaining amount to be filled
   *
   * Used to determine if an order can be matched with another order
   * and how much of it can be filled.
   *
   * @returns {number} - Remaining amount
   */
  getRemainingAmount() {
    // Implementation would calculate amount - filledAmount
  }

  /**
   * Get the total value of this order
   *
   * Used to calculate the total potential trade value.
   * For example, if buying 10 tokens at 2 USD each, the total value is 20 USD.
   *
   * @returns {number} - Total value
   */
  getTotalValue() {
    // Implementation would calculate amount * price
  }

  /**
   * Get the remaining value to be filled
   *
   * Similar to getTotalValue, but only for the unfilled portion.
   * Used to calculate potential partial fills.
   *
   * @returns {number} - Remaining value
   */
  getRemainingValue() {
    // Implementation would calculate getRemainingAmount() * price
  }

  /**
   * Check if this order is expired
   *
   * Orders can have optional time limits. This method checks
   * if the current time has passed the expiration time.
   *
   * @returns {boolean} - True if expired
   */
  isExpired() {
    // Implementation would check if current time exceeds expirationTime
  }

  /**
   * Calculate estimated gas costs for this order
   *
   * Since this is a cross-chain system, we need to calculate gas costs
   * on both blockchains involved in the trade.
   *
   * @returns {Object} - Gas fees for base and quote blockchains
   */
  estimateGasCost() {
    // Implementation would get gas fees from both blockchains
    // and return object with both costs
  }
}

module.exports = { Order, OrderType, OrderStatus };
