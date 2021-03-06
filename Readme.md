# **Team Chat Application**

A self-hosted chat app with multiple rooms for communicating between team members.

## Features and Stuff

* Persistent messages
* Multiple rooms
* New message alerts
* Image embeds
* File uploads

## Getting started

```
git clone https://github.com/nickfogle/teamchat.git
cd teamchat
```

Install node dependencies

```
npm install
```

Create a settings file (make sure to edit if you need to).

```
cp settings.js.sample settings.js
```

Run the app

```
node app.js
```

Party time: [http://localhost:5000](http://localhost:5000)

## Deploying to Heroku

Remove settings.js from .gitignore and uncomment the line `// db_url: process.env.DATABASE_URL`. Be sure to set the DATABASE_URL config variable on heroku to your mongo url. To get your mongo URL, add a mongolab add-on, find its database url config variable, and set the DATABASE_URL to that url. For instance, to do this with the free tier of mongolab on a heroku app called heroku-app-name:

```
heroku addons:add mongolab -a heroku-app-name
heroku config:set DATABASE_URL=`heroku config:get MONGOLAB_URI -a heroku-app-name` -a heroku-app-name
```

Additionally, you should set the following config variables from heroku config variables by changing their values to `config_var_name: process.env.CONFIG_VAR_NAME` and running `heroku config:set CONFIG_VAR_NAME=config_var_value -a heroku-app-name`:

```
cookie_secret
password_salt
s3.accessKeyId
s3.secretAccessKey
s3.region
s3.bucket
```

Note that you must use s3 (or hack in a different solution) to allow file uploads with lets-chat on heroku, as the filesystem is not persisted across heroku deploys.

Last, be sure to enable heroku's websockets support, otherwise socket.io will fall back to XHR polling (slower).

```
heroku labs:enable websockets -a heroku-app-name
```

Now you can push your app to heroku!

```
git remote add heroku git@heroku.com:heroku-app-name.git
git push heroku master
```

You must compile all of your assets and commit them before deploying (TODO: heroku asset pipeline?).
