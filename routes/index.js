const express = require( 'express' )
const router = express.Router()

const transactions = require( './transactions' )
const monitor = require( './monitor' )

router.use( '/transactions', transactions )
router.use( '/monitor', monitor )

module.exports = router
