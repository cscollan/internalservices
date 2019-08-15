const express = require('express')
const router = express.Router()

var coreController = require('./controllers/coreController.js')
var hubServicesController = require('./controllers/HubServicesController.js')
var informationServicesController = require('./controllers/informationServicesController.js')
var transactionalServicesController = require('./controllers/transactionalServicesController.js')

router.get('/', coreController.home_get);

// Hub services
router.get('/hub_services/index', hubServicesController.hub_services_get);
router.get('/hub_services/operator_hub', hubServicesController.operator_hub_get);

// Information services
router.get('/information_services/index', informationServicesController.information_services_get);
router.get('/information_services/absg', informationServicesController.absg_get);
router.get('/information_services/download_your_licence', informationServicesController.download_your_licence_get);
router.get('/information_services/fee_calculator_frontend', informationServicesController.fee_calculator_frontend_get);
router.get('/information_services/fournlc_website', informationServicesController.fournlc_website_get);
router.get('/information_services/premises_register', informationServicesController.premises_register_get);
router.get('/information_services/public_register_operator', informationServicesController.public_register_operator_get);
router.get('/information_services/public_register_personal', informationServicesController.public_register_personal_get);
router.get('/information_services/reducing_gambling_harms', informationServicesController.reducing_gambling_harms_get);
router.get('/information_services/sanctions_register', informationServicesController.sanctions_register_get);

// Transactional services
router.get('/transactional_services/index', transactionalServicesController.transactional_services_get);

// Web services

module.exports = router

