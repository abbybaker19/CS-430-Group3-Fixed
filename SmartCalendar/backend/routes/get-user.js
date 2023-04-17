const { response } = require('express');
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

router.get('/', (req, res) => {
    let db = new sqlite3.Database('./db.sqlite');
    db.serialize(() => {
        db.all('SELECT * FROM user', (err, rows) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(rows);
            }
        });
    });
    db.close();
});

module.exports = router;