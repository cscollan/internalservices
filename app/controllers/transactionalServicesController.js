const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.transactional_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationTransactionalContent',
        'fields.slug': slug
      })
    ])
    .then(([n]) => {
      detail_page = n,
    
  console.log(n)
      res.render('transactional_services/detail_page', {
        detail_page
      });
    })
    .catch(error => {
      console.log(error);
    });

}


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
