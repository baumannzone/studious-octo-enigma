const express = require( 'express' )
const path = require( 'path' )
const cookieParser = require( 'cookie-parser' )
const logger = require( 'morgan' )

const routes = require( './routes' )

const app = express()
app.disable( 'x-powered-by' )

app.use( logger( 'dev' ) )
app.use( express.json() )
app.use( express.urlencoded( { extended: false } ) )
app.use( cookieParser() )

app.use( '/', ( req, res, next ) => {
  const basePath = '/api/v1'
  res.status( 200 ).json( {
    routes: {
      root: [
        `${ basePath }/`
      ],
      monitor: [
        `${ basePath }/monitor/block`,
        `${ basePath }/monitor/stats`,
        `${ basePath }/monitor/charts`,
        `${ basePath }/monitor/pending`,
        `${ basePath }/monitor/all`,
      ],
      transactions: [
        `${ basePath }/transactions`,
        `${ basePath }/transactions/:transactionId`,
        `${ basePath }/transactions/create`,
      ]
    }
  } )
} )
app.use( '/api/v1', routes )

app.use( '*', ( req, res ) => {
  res.status( 404 ).json( { message: '404 Not Found' } )
} )


module.exports = app
