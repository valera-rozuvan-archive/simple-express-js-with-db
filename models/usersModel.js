var Datastore = require('nedb'),
  usersDb = new Datastore({
    filename: '../db/users.db',
    autoload: true
  });

module.exports = usersDb;
