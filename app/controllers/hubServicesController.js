const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.hub_services_get = function (req, res) {
    
    console.log('get services')

    var hub_services;
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationHubContent',        
          order: 'fields.title'
        })
      ])
      .then(([n]) => {
        hub_services = n,
      
        res.render('hub_services/index', {
            hub_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}
