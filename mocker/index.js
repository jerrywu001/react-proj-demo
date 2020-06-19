const url = '/api/mock';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const doDemo = require('./scripts/demo');

process.env.NODE_ENV = 'development';

app.use(bodyParser.json());

// mocks
doDemo(app, url);

console.log('mock server starting on port: 3333')
app.listen(3333);
