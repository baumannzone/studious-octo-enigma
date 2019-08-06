const express = require( 'express' )
const router = express.Router()

const monitor = require( './monitor' )
const transactions = require( './transactions' )

router.use( '/monitor', monitor )
router.use( '/transactions', transactions )

module.exports = router
