var gpio = require('rpi-gpio');
 
gpio.setup(7, gpio.DIR_HIGH, write);
 
function write() {
    gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}