const express = require( 'express' )
const router = express.Router()

const monitorController = require( '../controllers/monitor' )

router.get( '/ws', monitorController.ws )
router.get( '/', monitorController.all )

router.get( '/stats', monitorController.stats )
router.get( '/charts', monitorController.charts )
router.get( '/blocks', monitorController.blocks )
router.get( '/pending', monitorController.pending )


module.exports = router
