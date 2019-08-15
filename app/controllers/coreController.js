exports.home_get = function (req, res) {
    res.redirect("/home")
}

// const contentful = require('contentful')

// const client = contentful.createClient({
//     space: process.env.space,
//     accessToken: process.env.spaceapi
// })