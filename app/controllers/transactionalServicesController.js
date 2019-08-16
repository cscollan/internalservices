exports.home_get = function (req, res) {
    res.redirect("/home")
}

exports.transactional_services_get = function (req, res) {
    res.render('/transactional_services/index');
}

exports.address_management_get = function (req, res) {
    res.render('transactional_services/address_management');
}

exports.annual_games_testing_get = function (req, res) {
    res.render('transactional_services/annual_games_testing');
}

exports.apply_for_a_pfl_get = function (req, res) {
    res.render('transactional_services/apply_for_a_pfl');
}

exports.audit_hub_get = function (req, res) {
    res.render('transactional_services/audit_hub');
}

exports.domain_names_get = function (req, res) {
    res.render('transactional_services/domain_names');
}

exports.eadmin_get = function (req, res) {
    res.render('transactional_services/eadmin');
}

exports.eservices_personal_get = function (req, res) {
    res.render('transactional_services/eservices_personal');
}

exports.esupport_get = function (req, res) {
    res.render('transactional_services/esupport');
}

exports.games_register_get = function (req, res) {
    res.render('transactional_services/games_register');
}

exports.gc_portal_get = function (req, res) {
    res.render('transactional_services/gc_portal');
}

exports.invoices_and_online_payments_get = function (req, res) {
    res.render('transactional_services/invoices_and_online_payments');
}

exports.key_event_get = function (req, res) {
    res.render('transactional_services/key_event');
}

exports.lccp_reporting_get = function (req, res) {
    res.render('transactional_services/lccp_reporting');
}

exports.licensing_authority_returns_get = function (req, res) {
    res.render('transactional_services/licensing_authority_returns');
}

exports.lottery_submissions_get = function (req, res) {
    res.render('transactional_services/lottery_submissions');
}

exports.manage_and_maintain_get = function (req, res) {
    res.render('transactional_services/manage_and_maintain');
}

exports.operator_application_annex_a_get = function (req, res) {
    res.render('transactional_services/operator_application_annex_a');
}

exports.operator_application_ol_get = function (req, res) {
    res.render('transactional_services/operator_application_ol');
}

exports.operator_application_pml_get = function (req, res) {
    res.render('transactional_services/operator_application_pml');
}

exports.processing_service_get = function (req, res) {
    res.render('transactional_services/processing_service');
}

exports.recuritment_portal_get = function (req, res) {
    res.render('transactional_services/recuritment_portal');
}

exports.lccp_reporting_get = function (req, res) {
    res.render('transactional_services/lccp_reporting');
}

exports.regulatory_returns_get = function (req, res) {
    res.render('transactional_services/regulatory_returns');
}

exports.sad_process_get = function (req, res) {
    res.render('transactional_services/sad_process');
}

exports.security_audit_submissions_get = function (req, res) {
    res.render('transactional_services/security_audit_submissions');
}

exports.trading_names_get = function (req, res) {
    res.render('transactional_services/trading_names');
}

exports.user_management_get = function (req, res) {
    res.render('transactional_services/user_management');
}

exports.variation_management_get = function (req, res) {
    res.render('transactional_services/variation_management');
}


// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: process.env.space,
//     accessToken: process.env.spaceapi
// })