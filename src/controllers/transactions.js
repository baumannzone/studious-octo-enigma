const Transaction = require( '../models/transactions' )

const controller = {}

controller.get = ( req, res, next ) => {
  res.json( { dude: 'what' } )
}

controller.getById = ( req, res, next ) => {
  res.json( { transactionId: req.params.txId } )
}

controller.create = ( req, res, next ) => {
  console.log( req.body )
  // const tx = new Transaction( { name: 'Silence' } )
  //
  // tx.save( function ( err, data ) {
  //   if ( err ) return console.error( err )
  //   console.log( data )
  // } )
  res.json( { dude: 'whattt?' } )
}


module.exports = controller
