const express = require('express');
const routes = require('./routes/index');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000);

// 1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
// 2) If it does, it returns both the Unix timestamp and the natural language form of that date.
// 3) If it does not contain a date or Unix timestamp, it returns null for those properties.