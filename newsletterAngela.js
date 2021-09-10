// const express = require('express');
// const bodyParser = require('body-parser');
// const request = require('request');
// const https = require('https');
// const mailchimp = require("@mailchimp/mailchimp_marketing");
//
// const app = express();
//
// app.use(express.static('Public'));
//
// app.use(bodyParser.urlencoded({extended: true}));
//
//
// app.get('/', function( req, res){
//   res.sendFile(__dirname + '/signup.html');
// });
//
//
// app.post('/', function (req, res){
//   const firstName = req.body.fName
//   const lastName = req.body.lName
//   const inputEmail = req.body.email
  // //console.log(firstName, lastName, inputEmail);
  // const data = {
  //   members: [
  //     {
  //       email_address: inputEmail,
  //       status:"subscribed",
  //       merge_fields: {
  //           FNAME: firstName,
  //           LNAME: lastName
  //       }
  //
  //     }
  //   ]



//   const jsonData = JSON.stringify(data);
//
//   const url = 'https://us1.api.mailchimp.com/3.0/lists/856f98e053'
//   const options = {
//     method: 'POST'
//     //auth: 'kalamon9:12e2b4600b16597e1189217932706e78-us1'
//   }
//
//   const request = https.request(url, options, function(response){
//     response.on('data', function(data){
//       console.log(JSON.parse(data));
//     })
//   })
//
//   request.write(jsonData);
//   request.end();
//
// });

// app.listen(3000, function () {
//   console.log('Server started on port 3000.')
// });
