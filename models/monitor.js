const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const options = { timestamps: true }

const MonitorSchema = new Schema( {
  action: {
    type: String
  },
  data: {
    type: Object
  }
}, options )

module.exports = mongoose.model( 'Monitor', MonitorSchema )
