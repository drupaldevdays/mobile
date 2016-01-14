# Drupal Dev Days Milan 2016 ionic mobile test app
Version: 0.1
Contributors: Italo Mairo (www.italomairo.com)

## Perform Global requirements
For more info: `http://ionicframework.com/docs/guide/installation.html`

###Node.js
First, install [Node.js 4](https://nodejs.org/en/) (Node 5 does not work at the moment!): 

Then you need to install cordova and ionic as global requirements 

### Install cordova (global)
$ sudo npm install -g cordova

### Install Ionic (global)
$ sudo npm install -g ionic

## Set up, mount it and test in your local environment this ionic mobile test app

#### Position yourself in the ionic-app folder and run the followings commands, it means from the website root:

$ cd ionic-app
$ npm install
$ bower install

#### Enable the iOS and Android platforms
$ ionic platform add ios
$ ionic platform add android

#### Drupal 8 ReST doesn't support CORS yet so the app directory should be hosted on the same hostname and port as the Drupal 8 instance running the ReST api. The easiest way is to copy or symlink the app directory from this repo to to root of your Drupal 8 installation
#### Go to your Drupal 8 DDD website root directory and make the symlink to the ionic app
$ cd path/to/root/ddd_website
$ ln -s /path/to/mobile/ionic-app

#### Configure the link with your specific drupal instance (local host url) in the file: 
`ionic-app/www-ionic/js/config.js`

#### Set to True the Drupal 8 permission RESTful Web Services => "Access GET on Content resource" to the Anonymous User (otherwise the app won't be able to expose the single Content page)

#### Test it out, as web app, just going here in your local server: 

`http://path/to/ddd_website/ionic-app/www`

#### Test it out, as mobile app (substitute ios for android to build for Android instead) running the following commands:
$ ionic build ios
$ ionic emulate ios