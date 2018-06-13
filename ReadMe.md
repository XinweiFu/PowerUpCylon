## Install Node 8
```bash
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# close your current terminal and open a new terminal
$ command -v nvm
$ nvm install v8.11.2
```

## Install Node Module Dependencies
```bash
$ npm install

# open node_modules/cylon-powerup/lib/driver.js
# change line 13 to: 
# 		var MOTOR = "86c3810e001040d9a11726b300768cd6",
# change line 14 to: 
#		RUDDER = "86c3810e002140d9a11726b300768cd6";
# change line 19 to: 
#		this.serviceId = "86c3810ef17140d9a11726b300768cd6";
```

## Device Bluetooth uuid
```bash
$ npm install -g cylon-ble
$ sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)
$ cylon-ble-scan
# Get the device (TailorToys PowerUp) uuid, copy it to app.js line 5
```

## Run and Have Fun
```bash
$ node app.js
# use keyboard arrows to control
```
