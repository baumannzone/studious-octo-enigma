const WebSocket = require( 'ws' )

const Monitor = require( '../models/monitor' )

const controller = {}

/**
 * Devuelve todos los datos
 * @param req
 * @param res
 * @param next
 */
controller.all = ( req, res, next ) => {
  const limit = 200
  Monitor.find().limit( limit )
    .then( ( data ) => {
      res.status( 200 ).json( {
        limit,
        data
      } )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

/**
 * Devuelve los `action` de tipo `pending`
 * @param req
 * @param res
 * @param next
 */
controller.pending = ( req, res, next ) => {
  const limit = 20
  Monitor.find( { action: 'pending' } ).limit( limit )
    .then( ( data ) => {
      res.status( 200 ).json( {
        limit,
        data
      } )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

/**
 * Devuelve los `action` de tipo `stats`
 * @param req
 * @param res
 * @param next
 */
controller.stats = ( req, res, next ) => {
  const limit = 20
  Monitor.find( { action: 'stats' } ).limit( limit )
    .then( ( data ) => {
      res.status( 200 ).json( {
        limit,
        data
      } )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

/**
 * Devuelve los `action` de tipo `blocks`
 * @param req
 * @param res
 * @param next
 */
controller.blocks = ( req, res, next ) => {
  const limit = 20
  Monitor.find( { action: 'block' } ).limit( limit )
    .then( ( data ) => {
      res.status( 200 ).json( {
        limit,
        data
      } )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

/**
 * Muestra los `action` de tipo `charts`
 * @param req
 * @param res
 * @param next
 */
controller.charts = ( req, res, next ) => {
  Monitor.find( { action: 'charts' } ).limit( 20 )
    .then( ( data ) => {
      res.status( 200 ).json( data )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

/**
 * Guarda en la Base de datos los datos del monitor de eth stats
 * @param req
 * @param res
 * @param next
 */
controller.ws = ( req, res, next ) => {
  // const url = 'wss://ethstats.net/primus/?_primuscb=1565037301948-0'
  // const ws = new WebSocket( url )
  // const arr = []
  //
  // ws.on( 'open', () => {
  //   console.log( 'connected' )
  // } )
  //
  // ws.on( 'message', data => {
  //   const d = JSON.parse( data )
  //
  //   if ( !arr.includes( d.action ) ) {
  //     arr.push( d.action )
  //     console.log( arr )
  //   }
  //
  //   Monitor.create( d, ( err, data ) => {
  //     if ( err ) console.log( err )
  //     console.log( data )
  //   } )
  // } )
  //
  // ws.on( 'close', () => {
  //   console.log( '\n' )
  //   console.log( 'disconnected' )
  //   console.log( '\n' )
  //   res.status( 400 ).json( { err: 'desconectado..' } )
  // } )
  res.status( 200 ).json( { message: 'Websocket desconectado 👍' } )
}

module.exports = controller
