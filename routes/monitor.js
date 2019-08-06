const express = require( 'express' )
const router = express.Router()

const monitorController = require( '../controllers/monitor' )

// router.get( '/ws', monitorController.ws )
router.get( '/all', monitorController.all )

router.get( '/charts', monitorController.charts )
router.get( '/pending', monitorController.pending )
router.get( '/block', monitorController.block )
router.get( '/stats', monitorController.stats )


module.exports = router
