const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.information_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationInformationContent',
        'fields.slug': slug
      })
    ])
    .then(([n]) => {
      detail_page = n,
    
  console.log(n)
      res.render('information_services/detail_page', {
        detail_page
      });
    })
    .catch(error => {
      console.log(error);
    });

}


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
