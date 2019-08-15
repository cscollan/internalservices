exports.home_get = function (req, res) {
    res.redirect("/home")
}

exports.transactional_services_get = function (req, res) {
    res.render('/transactional_services/index');
}


// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: process.env.space,
//     accessToken: process.env.spaceapi
// })