//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; //current screen
    res.locals.prevURL = req.get('Referrer'); // previous screen
    req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
    req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
    res.locals.folder = req.folder; // what folder the url is
    res.locals.subfolder = req.subfolder; // what subfolder the URL is in
   // console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
    //console.log('previous page is: ' + res.locals.prevURL + " and current page is " + res.locals.currentURL );
    next();
  });

// Route index page
router.get('/', function (req, res) {
    res.render('./index')
  });
  
  // Previous versions go here
  //router.use('/v1', require('./views/v9/_routes'))

  // Latest version goes here
  // V1 routes
router.use('/v1/', (req, res, next) => {
    //req.session.data["entered-criteria"] = undefined;
    return require(`./views/v1/_routes`)(req, res, next);
  })