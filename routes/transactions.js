const express = require( 'express' )
const router = express.Router()

const txControllers = require( '../controllers/transactions' )

router.get( '/transactions', txControllers.get )
router.get( '/transactions/:txId', txControllers.getById )
router.post( '/transactions/create', txControllers.create )


module.exports = router
