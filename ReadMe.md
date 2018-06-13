1. Intall Node 8 and npm
2. npm install
3. open node_modules/cylon-powerup/lib/driver.js
    change line 13 to:  var MOTOR = "86c3810e001040d9a11726b300768cd6",
    change line 14 to:      RUDDER = "86c3810e002140d9a11726b300768cd6";
    change line 19 to:  this.serviceId = "86c3810ef17140d9a11726b300768cd6";
4. npm install -g cylon-ble
   sudo cylon-ble-scan
5. Get the device uuid and copy it to icanfly.js line 5
6. node icanfly.js
7. use keyboard w s a d to control
