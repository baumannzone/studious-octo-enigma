const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const options = { timestamps: true }

const TransactionsSchema = new Schema( {
  name: {
    required: true,
    type: String,
    default: ''
  }
}, options )

module.exports = mongoose.model( 'Transaction', TransactionsSchema )
