const express = require( 'express' )
const router = express.Router()

const monitorController = require( '../controllers/monitor' )

router.get( '/charts', monitorController.charts )

module.exports = router
