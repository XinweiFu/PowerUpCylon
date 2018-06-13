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
    var thrust = 0;
    var rudder = 0;
    var canRudder = false;

    var cb = function(err) {
      if (!!err) {
        console.log(err);
      } else {
        if (canRudder) {
          canRudder = false;
          my.powerup.setRudder(rudder, cb);
        }
        else {
          my.powerup.setThrust(thrust, cb);
        }
      }
    }

    my.powerup.setThrust(thrust, cb);

    my.keyboard.on('up', function(key) {
        thrust = Math.min(thrust + 25, 250);
        console.log("UP thrust = ", thrust);
    });

    my.keyboard.on('down', function(key) {
        thrust = Math.max(thrust - 25, 0);
        console.log("DOWN thrust = ", thrust);
    });

    my.keyboard.on('left', function(key) {
        rudder = Math.min(rudder + 30, 120);
        canRudder = true;
        console.log("LEFT rudder = ", rudder);
    });

    my.keyboard.on('right', function(key) {
        rudder = Math.max(rudder - 30, -120);
        canRudder = true;
        console.log("RIGHT rudder = ", rudder);
    });
  }
}).start();
