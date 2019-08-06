const express = require( 'express' )
const router = express.Router()

const txControllers = require( '../controllers/transactions' )

router.get( '/', txControllers.get )
router.get( '/:txId', txControllers.getById )
router.post( '/', txControllers.create )


module.exports = router
