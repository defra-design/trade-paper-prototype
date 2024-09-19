const govukPrototypeKit = require('govuk-prototype-kit')


const { red } = require('ansi-colors');
const router = govukPrototypeKit.requests.setupRouter()
var version = "v1";


router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Use of paper in the export journey'
  next()
});


router.get('/index', function (req, res) {
  res.render( './' + req.originalUrl, {} )
})



module.exports = router;