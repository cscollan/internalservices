const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.hub_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationHubContent',
        'fields.slug': slug
      })
    ])
    .then(([n]) => {
      detail_page = n,
    
  console.log(n)
      res.render('hub_services/detail_page', {
        detail_page
      });
    })
    .catch(error => {
      console.log(error);
    });

}


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

