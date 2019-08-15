exports.home_get = function (req, res) {
    res.redirect("/home")
}

exports.hub_services_get = function (req, res) {
    res.render('/hub_services/index');
}

exports.operator_hub_get = function (req, res) {
    res.render('hub_services/operator_hub');
}

// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: process.env.space,
//     accessToken: process.env.spaceapi
// })