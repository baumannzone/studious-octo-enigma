const charts = require( '../utils/monitor/charts' )

const controller = {}

controller.charts = ( req, res, next ) => {
  res.status( 200 ).json( charts )
}

module.exports = controller
