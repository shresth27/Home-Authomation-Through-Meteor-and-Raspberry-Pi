const express = require('express')
const app = express()
var gpio = require('rpi-gpio');
var bodyParser = require('body-parser');

gpio.setup(3, gpio.DIR_OUT);
gpio.setup(5, gpio.DIR_OUT);
gpio.setup(7, gpio.DIR_OUT);
gpio.setup(11, gpio.DIR_OUT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => res.send('Hello World!'))

/*
app.post('/', function(req, res){

gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
    });

});
*/

app.post('/toggle', function (req, res) {
  const pinNo = req.body.pinNo;
  const lightOn = req.body.lightOn;
  console.log('DATA', pinNo, lightOn);
  gpio.write(pinNo, !!lightOn, function(err) {
    if (err) {
      console.log(err)
      return res.status(500).jsonp({ err });
    }
    console.log(`Written ${lightOn} to pin ${pinNo}`);
    res.send(`Written ${lightOn} to pin ${pinNo}`);
  });
});

app.listen(8000, () => console.log('Example app listening on port 8000!'))