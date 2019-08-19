const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.web_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationWebServicesContent',
        'fields.slug': slug
      })
    ])
    .then(([n]) => {
      detail_page = n,
    
  console.log(n)
      res.render('web_services/detail_page', {
        detail_page
      });
    })
    .catch(error => {
      console.log(error);
    });

}


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
