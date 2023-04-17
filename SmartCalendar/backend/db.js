const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
            (err) => {
                if (err) {
                    // Table already exists
                    console.log('Table already exists.');
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)';
                    db.run(insert, ["admin", "admin@example.com", "admin123"]);
                    db.run(insert, ["user", "user@example.com", "user123"]);
                }
            });
        
        db.run(`CREATE TABLE event (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            date TEXT,
            time TEXT,
            location TEXT
            )`,
            (err) => {
                if (err) {
                    // Table already exists
                    console.log('Table already exists.');
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO event (name, date, time, location) VALUES (?,?,?,?)';
                    db.run(insert, ["admin", "12011", "test", "WVUWAY"]);
                }
            });
    }
});

module.exports = db;
