const WebSocket = require( 'ws' )

const Monitor = require( '../models/monitor' )
const charts = require( '../utils/monitor/charts' )

const controller = {}

controller.all = ( req, res, next ) => {
  Monitor.find( {}, ( err, data ) => {
    if ( err ) return res.status( 500 ).json( { err } )
    res.status( 200 ).json( data )
  } )
}

controller.pending = ( req, res, next ) => {
  Monitor.find( { action: 'pending' } ).limit( 20 )
    .then( ( data ) => {
      res.status( 200 ).json( data )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

controller.stats = ( req, res, next ) => {
  Monitor.find( { action: 'stats' } ).limit( 20 )
    .then( ( data ) => {
      res.status( 200 ).json( data )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

controller.block = ( req, res, next ) => {
  Monitor.find( { action: 'block' } ).limit( 20 )
    .then( ( data ) => {
      res.status( 200 ).json( data )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

controller.charts = ( req, res, next ) => {
  Monitor.find( { action: 'charts' } ).limit( 20 )
    .then( ( data ) => {
      res.status( 200 ).json( data )
    } )
    .catch( ( err ) => {
      res.status( 500 ).json( { err } )
    } )
}

controller.ws = ( req, res, next ) => {
  const url = 'wss://ethstats.net/primus/?_primuscb=1565037301948-0'
  const ws = new WebSocket( url )
  const arr = []

  ws.on( 'open', () => {
    console.log( 'connected' )
  } )

  ws.on( 'message', data => {
    const d = JSON.parse( data )

    if ( !arr.includes( d.action ) ) {
      arr.push( d.action )
      console.log( arr )
    }

    Monitor.create( d, ( err, data ) => {
      if ( err ) console.log( err )
      console.log( data )
    } )

    /*
    * pending
    * stats
    * block
    * charts
    * client-ping
    * */
  } )

  ws.on( 'close', () => {
    console.log( '\n' )
    console.log( 'disconnected' )
    console.log( '\n' )
    res.status( 400 ).json( { err: 'desconectado..' } )
  } )


  // const monitor = new Monitor()
  // res.status( 200 ).json( charts )
}

module.exports = controller
