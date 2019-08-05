const express = require( 'express' )
const router = express.Router()

const txControllers = require( '../controllers/transactions' )

router.get( '/get', txControllers.get )
router.get( '/get/:txId', txControllers.getById )
router.post( '/create', txControllers.create )


module.exports = router