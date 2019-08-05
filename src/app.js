const express = require( 'express' )
const path = require( 'path' )
const cookieParser = require( 'cookie-parser' )
const logger = require( 'morgan' )

const routes = require( './routes/transactions' )


const app = express()


app.use( logger( 'dev' ) )
app.use( express.json() )
app.use( express.urlencoded( { extended: false } ) )
app.use( cookieParser() )


app.use( '/', routes )


module.exports = app
