const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html')
});

app.post('/', function (req, res){

  const quary = req.body.cityName;
  const key = '3f47a885c0249a51715383a5a67e5dfb'
  const units = 'metric'
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + quary + '&units=' + units + '&appid=' + key;
  https.get(url, function(response){
    //console.log(response.statusCode);

    response.on('data', function(data){
    //console.log(data);
    const weatherData = JSON.parse(data);
    //console.log(weatherData);
    const temp = Math.round(weatherData.main.temp)
    const feelsLike = Math.round(weatherData.main.feels_like)
    //console.log(temp);
    const description = weatherData.weather[0].description
    //console.log(description);
    const icon = weatherData.weather[0].icon
    const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
    res.write('<h1>The temperature in ' + quary + ' is ' + temp + 'C, but feels like ' + feelsLike + 'C.</h1>');
    res.write('<h2> The weather is currently ' + description + '.</h2>');
    res.write('<img src=' + imageUrl +'>');
    res.send();
    });
    });

});



app.listen(3000, function() {
  console.log('Server listening at port 3000.');
});
