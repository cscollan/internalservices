const express = require('express')
const router = express.Router()

var coreController = require('./controllers/coreController.js')
var hubServicesController = require('./controllers/HubServicesController.js')
var informationServicesController = require('./controllers/informationServicesController.js')
var transactionalServicesController = require('./controllers/transactionalServicesController.js')
var webServicesController = require('./controllers/webServicesController.js')

router.get('/', coreController.home_get);

// Hub services
router.get('/hub_services/index', hubServicesController.hub_services_get);
router.get('/hub_services/details/:id', hubServicesController.hub_services_get);


// Information services
router.get('/information_services/index', informationServicesController.information_services_get);
router.get('/information_services/details/:id', informationServicesController.information_services_get);

// Transactional services
router.get('/transactional_services/index', transactionalServicesController.transactional_services_get);
router.get('/transactional_services/details/:id', transactionalServicesController.transactional_services_get);

// Web services
router.get('/web_services/', webServicesController.web_services_get);
router.get('/web_services/details/:id', webServicesController.web_services_get);


module.exports = router

