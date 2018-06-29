# Install Node 8
sudo apt-get update
sudo apt-get install build-essential libssl-dev
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
command -v nvm
nvm install v8.11.2

# Install cylon-ble
npm install -g cylon-ble
sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)

# Install local module dependencies
npm install

# Install Atom
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom
apm install platformio-ide-terminal
