const { response } = require('express');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

// Add a new user to the database
router.post('/', (req) => {
  let db = new sqlite3.Database('./db.sqlite');
  let event = req.body;
  console.log("TEST");
  // Insert the new user into the database
  db.run('INSERT INTO event(name, date, time, location) VALUES(?, ?, ?, ?)', [event.name, event.date, event.time, event.location], function(err) {
    if (err) {
      return console.error(err.message);
    }
  });
});

module.exports = router;