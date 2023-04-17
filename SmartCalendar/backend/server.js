const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const port = 3000;

const getUser = require('./routes/get-user');
const addUser = require('./routes/add-user');
const getEvent = require('./routes/get-event');
const addEvent = require('./routes/add-event');
app.use('/get-user', getUser);
app.use('/add-user', addUser);
app.use('/get-event', getEvent);
app.use('/add-event', addEvent);


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
