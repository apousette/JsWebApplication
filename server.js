'use strict';

const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute');

const port = 8080;

app.use(express.static('public'));
app.use('/', indexRoute);
app.listen(port);

console.log('Sever is up and running listening to port ' + port);


