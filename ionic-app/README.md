# Drupal Dev Days Milan 2016 ionic mobile test app

A Ionic / Angular Mobile Application that interacts with the Drupal 8 Dev Days (Milan 2016) web site

#### Version: 0.1

#### Contributors:

 * Italo Mairo (www.italomairo.com)

## Global requirements

To work with mobile app you need to have:

 * NodeJS
 * Cordova
 * Ionic

For more info see the [ionic website](http://ionicframework.com/docs/guide/installation.html).

To install *Node.js* follow the official documentation to install [Node.js 4](https://nodejs.org/en/) (Node 5 does not work at the moment!).

After the Node.JS setup you need to install [Cordova](https://cordova.apache.org/):

    $ sudo npm install -g cordova

And [Ionic](http://ionicframework.com/):

    $ sudo npm install -g ionic

## Project set-up (local environment)

Position yourself in the `ionic-app` folder and run the followings commands, it means from the website root:

    $ cd ionic-app
    $ npm install
    $ bower install

Enable the iOS and Android platforms

    $ ionic platform add ios
    $ ionic platform add android

#### Fix CORS issue

Drupal 8 ReST doesn't support CORS yet so the app directory should be hosted on the same hostname and port as the Drupal 8 instance running the ReST api. The easiest way is to copy or symlink the app directory from this repo to to root of your Drupal 8 installation
Go to your Drupal 8 DDD website root directory and make the symlink to the ionic app

    $ cd path/to/root/ddd_website
    $ ln -s /path/to/mobile/ionic-app

## Configure the app with your specific localhost environment

Make a copy of the `config-app.default.js` renaming it `config.js` file and move it in the `ionic-app/www/js` folder, to do that, from the `ionic-app` folder:

    $ cp config-app.default.js www/js/config.js

and update the `baseUrl` value with your specific local drupal URI.

## Test the application

Test it out, as web app, please start the ionic webserver with:

    $ ionic serve

then visit the URI as reported from output in terminal.

Local webserver need also to use a proxy since CORS is disabled, to do that, open the file `ionic.project` and add:

    {
      "name": "ddd-ionic",
      ...
      "proxies": [
        {
          "path": "/web",
          "proxyUrl": "http://milan2016.drupaldays.org"
        }
      ]
    }

then edit the confiuration file created above to use `http://localhost:8100/web` as `baseUrl`.


#### Test it out,

To test as mobile app run:

    $ ionic build ios
    $ ionic emulate ios

Replace `ios` with `android` for android to build.
