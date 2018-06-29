
## Setup
```bash
$ ./setup.sh
```

## Device Bluetooth uuid
```bash
$ cylon-ble-scan
# Get the device (TailorToys PowerUp) uuid, copy it to app.js line 5
```
We recorded UUID for 10 planes here:

| Label | PowerUp UUID |
|-------|--------------|
|   1   | 0cb2b73fc072 |
|   2   | 7c010af716cc |
|   3   | 0cb2b77e4f10 |
|   4   | 7c010af7154b |
|   5   | 0cb2b77e18cc |
|   6   | 7c010af72ca4 |
|   7   | 7c010af723d1 |
|   8   | 7c010af72115 |
|   9   | 7c010af60819 |
|   10  | 7c010af72cb9 |

## Run and Have Fun
```bash
$ node app.js
# use keyboard arrows to control
```

## Firmware issue
If you updated the firmware of the plane, you should also update the driver like this:
```bash
# open node_modules/cylon-powerup/lib/driver.js
# change line 13 to:
# 		var MOTOR = "86c3810e001040d9a11726b300768cd6",
# change line 14 to:
#		RUDDER = "86c3810e002140d9a11726b300768cd6";
# change line 19 to:
#		this.serviceId = "86c3810ef17140d9a11726b300768cd6";
```
The firmware will be automatically updated once you connect the device with the official mobil app. Only the firmware of the demo plane has been updated.
