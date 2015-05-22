'use strict';

var app = require('../app.js'),
  server;

app.set('port', process.env.PORT || 8000);

server = app.listen(app.get('port'), function () {
  console.log('[DEBUG] Express server listening on port:', server.address().port);
  console.log('');
});
