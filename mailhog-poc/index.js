const nodemailer = require('nodemailer');

function send(
  data,
  callback,
) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  return transporter.sendMail(
    {
      from: process.env.EMAIL_USER,
      to: data.to.replace(new RegExp(';', 'g'), ','),
      subject: data.subject,
      text: data.subject,
      html: data.message
    },
    callback,
  );
}

module.exports = send;