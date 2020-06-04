const url = '/api/mock';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

process.env.NODE_ENV = 'development';

app.use(bodyParser.json());

// mocks
app.get(`${url}/users`, (req, res) => {
    setTimeout(() => {
        res.json({
            code: 200,
            result: [
                {
                    name: 'jack'
                },
                {
                    name: 'jack2'
                }
            ]
        });
    }, 600);
});
console.log('mock server starting on port: 3333')
app.listen(3333);
