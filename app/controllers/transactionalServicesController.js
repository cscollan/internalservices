const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.transactional_services_get = function (req, res) {
    
    console.log('get services')

    var transactional_services;
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationTransactionalContent',        
          order: 'fields.title'
        })
      ])
      .then(([n]) => {
        transactional_services = n,
      
        res.render('transactional_services/index', {
            transactional_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}