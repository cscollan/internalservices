exports.home_get = function (req, res) {
    res.redirect("/home")
}

const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.accessibility_get = function (req, res) {
    var content;

    Promise.all([

            client.getEntry('mcHwIsTWBy8xxD88JTVmv')
        ])
        .then(([c]) => {

            content = c

            res.render('home/accessibility', {
                content
            });
        })
        .catch(error => {
            console.log(error);
        });
}

exports.feedback_get = function (req, res) {
    res.render('home/feedback');
}

exports.feedback_sent_get = function (req, res) {
    res.render('home/sent');
}

exports.feedback_post = function (req, res) {

    notify
      .sendEmail(process.env.feedbacktemplate, process.env.feedbackrecipient, {
         personalisation: {
          'name': req.body.name,
          'email': req.body.email,
          'message': req.body.message
        }
      })
      .then(response => console.log(response))
      .catch(err => console.error(err))
      
      res.redirect('/feedback/sent');
  }

exports.home_get = function (req, res) {

   res.redirect("home/");
}