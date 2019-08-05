const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

/**
 * Transactions schema
 */

const options = { timestamps: true }

const TransactionsSchema = new Schema( {
  name: {
    required: true,
    type: String,
    default: ''
  }
}, options )

module.exports = mongoose.model( 'Transaction', TransactionsSchema )
