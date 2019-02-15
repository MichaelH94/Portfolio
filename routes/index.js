var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const config = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    type: "OAuth2",
    user: config.email,
    clientId: config.id,
    clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
    refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
    accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
    expires: 1484314697598

  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'michaelhaggard94@gmail.com',  
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;