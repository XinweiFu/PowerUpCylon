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

    my.keyboard.on('up', function(key) {

    });

    my.keyboard.on('down', function(key) {

    });

    my.keyboard.on('left', function(key) {

    });

    my.keyboard.on('right', function(key) {

    });
  }
}).start();
