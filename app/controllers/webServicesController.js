const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.web_services_get = function (req, res) {
    
    console.log('get services')

    var web_services;
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationWebServicesContent',        
          order: 'fields.title'
        })
      ])
      .then(([n]) => {
        web_services = n,
      
        res.render('web_services/index', {
            web_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}
