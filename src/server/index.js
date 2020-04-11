const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const aylien = require('aylien_textapi');
const aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});

app.post('/process', function (req, res) {
    const url = req.body.url;

    aylienApi.sentiment({
        url: url,
        mode: 'document'
    }, (err, response) => {
        console.log(err, response);
        if (err) {
            res.status(400);
            return res.json(err);
        }

        return res.json(response);
    });
});
