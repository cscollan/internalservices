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
router.get('/transactional_services/address_management', transactionalServicesController.address_management_get);
router.get('/transactional_services/annual_games_testing', transactionalServicesController.annual_games_testing_get);
router.get('/transactional_services/apply_for_a_pfl', transactionalServicesController.apply_for_a_pfl_get);
router.get('/transactional_services/ audit_hub', transactionalServicesController.audit_hub_get);
router.get('/transactional_services/ domain_names', transactionalServicesController.domain_names_get);
router.get('/transactional_services/ eadmin', transactionalServicesController.eadmin_get);
router.get('/transactional_services/ eservices_personal', transactionalServicesController.eservices_personal_get);
router.get('/transactional_services/esupport', transactionalServicesController.esupport_get);
router.get('/transactional_services/games_register', transactionalServicesController.games_register_get);
router.get('/transactional_services/gc_portal', transactionalServicesController.gc_portal_get);
router.get('/transactional_services/invoices_and_online_payments', transactionalServicesController.invoices_and_online_payments_get);
router.get('/transactional_services/key_event', transactionalServicesController.key_event_get);
router.get('/transactional_services/lccp_reporting', transactionalServicesController.lccp_reporting_get);
router.get('/transactional_services/licensing_authority_returns', transactionalServicesController.licensing_authority_returns_get);
router.get('/transactional_services/lottery_submissions', transactionalServicesController.lottery_submissions_get);
router.get('/transactional_services/manage_and_maintain', transactionalServicesController.manage_and_maintain_get);
router.get('/transactional_services/operator_application_annex_a', transactionalServicesController.operator_application_annex_a_get);
router.get('/transactional_services/operator_application_ol', transactionalServicesController.operator_application_ol_get);
router.get('/transactional_services/operator_application_pml', transactionalServicesController.operator_application_pml_get);
router.get('/transactional_services/processing_service', transactionalServicesController.processing_service_get);
router.get('/transactional_services/recuritment_portal', transactionalServicesController.recuritment_portal_get);
router.get('/transactional_services/regulatory_returns', transactionalServicesController.regulatory_returns_get);
router.get('/transactional_services/sad_process', transactionalServicesController.sad_process_get);
router.get('/transactional_services/security_audit_submissions', transactionalServicesController.security_audit_submissions_get);
router.get('/transactional_services/trading_names', transactionalServicesController.trading_names_get);
router.get('/transactional_services/user_management', transactionalServicesController.user_management_get);
router.get('/transactional_services/variation_management', transactionalServicesController.variation_management_get);

// Web services

module.exports = router

