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
    
    var cb = function(err) {
      if (!!err) {
        console.log(err);
      }
    }

    my.keyboard.on('w', function(key) {
        thrust = Math.min(thrust + 25, 250);
        my.powerup.setThrust(thrust, cb);
        console.log("W thrust = ", thrust);
    });

    my.keyboard.on('s', function(key) {
        thrust = Math.max(thrust - 25, 0);
        my.powerup.setThrust(thrust, cb);
        console.log("S thrust = ", thrust);
    });

    my.keyboard.on('a', function(key) {
        rudder = Math.min(rudder + 30, 120);
        my.powerup.setRudder(rudder, cb);
        console.log("A rudder = ", rudder);
    });

    my.keyboard.on('d', function(key) {
        rudder = Math.max(rudder - 30, -120);
        my.powerup.setRudder(rudder, cb);   
        console.log("D rudder = ", rudder);
    });
  }
}).start();
