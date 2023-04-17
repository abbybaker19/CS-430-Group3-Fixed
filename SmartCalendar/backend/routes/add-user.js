const { response } = require('express');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

// Add a new user to the database
router.post('/', (req) => {
  let db = new sqlite3.Database('./db.sqlite');
  let user = req.body;
  // Insert the new user into the database
  db.run('INSERT INTO user(name, email) VALUES(?, ?)', [user.name, user.email], function(err) {
    if (err) {
      return console.error(err.message);
    }
  });
});

module.exports = router;