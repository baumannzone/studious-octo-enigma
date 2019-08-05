const express = require( 'express' )
const router = express.Router()

const Transaction = require( '../models/transactions' )

router.get( '/', function ( req, res, next ) {
  const tx = new Transaction( { name: 'Silence' } )

  tx.save( function ( err, data ) {
    if ( err ) return console.error( err )
    console.log( data )
    res.json( { data: 'DUDE WHAT' } )
  } )

} )

module.exports = router
