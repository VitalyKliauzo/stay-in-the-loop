var ActiveDirectory = require('activedirectory2');

var username = 'vitalykliauzo@coherentsolutions.com';
var password = '301287Vintby4';

var config = { url: 'ldap://10.200.100.13',
               baseDN: 'dc=BY-MINSK,dc=CSI,dc=local',
               username,
               password,
            };
// var config = { url: 'ldap://10.200.100.12',
//                baseDN: 'dc=BG-SOFIA,dc=CSI,dc=local',
//                username,
//                password,
//             };

var ad = new ActiveDirectory(config);

// ad.authenticate(username, password, function(err, auth) {
//     if (err) {
//       console.log('ERROR: ' + JSON.stringify(err));
//       return;
//     }
   
//     if (auth) {
//       console.log('Authenticated!');
//     }
//     else {
//       console.log('Authentication failed!');
//     }
//   });

//var groupName = 'eVisitor - WEX Health Access BG-SOFIA';
var groupName = 'eVisitor - Chamberlain Access';
//var groupName = 'Everyone Minsk';


ad.getUsersForGroup(groupName, function(err, users) {
    if (err) {
      console.log('ERROR: ' + JSON.stringify(err));
      return;
    }
   
    if (! users) console.log('Group: ' + groupName + ' not found.');
    else {
      //console.log(JSON.stringify(users));
      console.log(users.length);
    }
  });