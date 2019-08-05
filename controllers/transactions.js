const Transaction = require( '../models/Transactions' )

const controller = {}

/**
 * Obtiene todas las tx
 * @param req
 * @param res
 * @param next
 */
controller.get = ( req, res, next ) => {
  Transaction.find( {}, ( err, data ) => {
    if ( err ) return res.status( 500 ).json( { err } )
    res.status( 200 ).json( data )
  } )
}

/**
 * Obtiene una tx
 * @param req
 * @param res
 * @param next
 */
controller.getById = ( req, res, next ) => {
  Transaction.findById( req.params.txId, ( err, data ) => {
    if ( err ) return res.status( 500 ).json( { err } )
    res.status( 200 ).json( data )
  } )
}

/**
 * Guarda una tx en la BD
 * @param req
 * @param res
 * @param next
 */
controller.create = ( req, res, next ) => {
  const name = req.body.name
  const tx = new Transaction( { name } )

  tx.save( ( err, data ) => {
    if ( err ) return res.status( 500 ).json( { err } )
    res.status( 201 ).json( { data } )
  } )
}


module.exports = controller
