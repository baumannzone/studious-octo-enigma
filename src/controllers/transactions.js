const Transaction = require( '../models/transactions' )

const controller = {}

/**
 * Obtiene todas las tx
 * @param req
 * @param res
 * @param next
 */
controller.get = ( req, res, next ) => {
  res.json( { dude: 'what' } )
}

/**
 * Obtiene una tx
 * @param req
 * @param res
 * @param next
 */
controller.getById = ( req, res, next ) => {
  res.json( { transactionId: req.params.txId } )
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
    if ( err ) return res.status( 500 ).json( { message: err.message } )
    res.status( 201 ).json( { data } )
  } )
}


module.exports = controller
