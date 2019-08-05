const express = require( 'express' )
const router = express.Router()

const Transaction = require( '../models/transactions' )

router.get( '/', function ( req, res, next ) {
  const data = {}
  res.json( data )
} )

module.exports = router
