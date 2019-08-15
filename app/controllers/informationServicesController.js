exports.home_get = function (req, res) {
    res.redirect("/home")
}

exports.information_services_get = function (req, res) {
    res.render('/information_services/index');
}

exports.absg_get = function (req, res) {
    res.render('information_services/absg');
}

exports.download_your_licence_get = function (req, res) {
    res.render('information_services/download_your_licence');
}

exports.fee_calculator_frontend_get = function (req, res) {
    res.render('information_services/fee_calculator_frontend');
}

exports.fournlc_website_get = function (req, res) {
    res.render('information_services/fournlc_website');
}

exports.premises_register_get = function (req, res) {
    res.render('information_services/premises_register');
}

exports.public_register_operator_get = function (req, res) {
    res.render('information_services/public_register_operator');
}

exports.public_register_personal_get = function (req, res) {
    res.render('information_services/public_register_personal');
}

exports.reducing_gambling_harms_get = function (req, res) {
    res.render('information_services/reducing_gambling_harms');
}

exports.sanctions_register_get = function (req, res) {
    res.render('information_services/sanctions_register');
}

// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: process.env.space,
//     accessToken: process.env.spaceapi
// })