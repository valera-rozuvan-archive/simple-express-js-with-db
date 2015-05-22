'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  usersRouter = require('./routes/usersRouter.js'),

  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    url = req.url,
    method = req.method;

  console.log('[DEBUG] New request:');
  console.log('---> Client IP is: ', ip);
  console.log('---> Requested url is: ', url);
  console.log('---> Requested method is: ', method);
  console.log('');

  next();
});

app.use(express.static('www'));
app.use('/api', usersRouter);

module.exports = app;
