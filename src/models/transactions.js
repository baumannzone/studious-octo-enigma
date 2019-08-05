const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Transactions schema
 */

const TransactionsSchema = new Schema({
  timestamps: true,
  name: {
    required: true,
    type: String,
    default: ''
  }
})

mongoose.model('Transaction', TransactionsSchema)

