#!/usr/bin/env bash

set -eux

mkdir pigshell-build
cd pigshell-build

git clone https://github.com/ganeshv/pegjs
pushd pegjs
    sudo npm install -g
popd
sudo npm install -g marked
sudo gem install ronn
sudo npm install -g jshint
sudo apt-get install apache2

git clone 'https://github.com/pigshell/pigshell.git'
pushd pigshell
    make
    # No: Changing the domain breaks cross domain headers somewhere.
    #sed -i 's/pigshell.com/pigshell.redshift.com/g'
    sudo ln -s "$(readlink -f etc/httpd-vhosts.conf)" /etc/apache2/sites-enabled/pigshell
popd
sudo a2enmod headers
sudo service apache2 restart

mkdir home
cd home
python psty.py -a -d $PWD
