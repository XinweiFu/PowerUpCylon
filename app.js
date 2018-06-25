var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'ble', uuid: '25e0bf5b73f04e0284566567ee4da3f4'},
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    powerup: { driver: 'powerup', connection: 'bluetooth' },
    keyboard: { driver: 'keyboard', connection: 'keyboard' }
  },

  work: function(my) {
    var canSet = true;
    var thrust = 0;
    var rudder = 0;

    var setDone = function(err) {
      if (!!err) {
        console.log(err);
      } else {
        canSet = true;
      }
    }

    my.keyboard.on('up', function(key) {
        if (canSet) {
            canSet = false;
            thrust = Math.min(thrust + 25, 250);
            console.log("UP thrust = ", thrust); 
            my.powerup.setThrust(thrust, setDone);
        }
    });

    my.keyboard.on('down', function(key) {
        if (canSet) {
            canSet = false;
            thrust = Math.max(thrust - 25, 0);
            console.log("DOWN thrust = ", thrust);
            my.powerup.setThrust(thrust, setDone);
        }
    });

    my.keyboard.on('left', function(key) {
        if (canSet) {
            canSet = false;
            rudder = Math.min(rudder + 30, 120);
            console.log("LEFT rudder = ", rudder);
            my.powerup.setRudder(rudder, setDone);
        }
    });

    my.keyboard.on('right', function(key) {
        if (canSet) {
            canSet = false;
            rudder = Math.max(rudder - 30, -120);
            console.log("RIGHT rudder = ", rudder);
            my.powerup.setRudder(rudder, setDone);
        }
    });
  }
}).start();
