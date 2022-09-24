var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gokulbabu811@gmail.com',
    pass: 'getuzdpdfseqjafh'
  }
});

var mailOptions = {
  from: 'gokulbabu811@gmail.com',
  to: 'prakashb2252002@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Welcome to sag corps'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});