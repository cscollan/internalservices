const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.information_services_get = function (req, res) {
    
    console.log('get services')

    var information_services;
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationInformationContent',        
          order: 'fields.title'
        })
      ])
      .then(([n]) => {
        information_services = n,
      
        res.render('information_services/index', {
            information_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}
