const send = require('./index');

send({
  to: 'to@gmail.com',
  subject: 'test notification',
  message: 'test notification message'
}, console.log);