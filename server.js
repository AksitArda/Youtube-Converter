const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
    console.log('Application Started...');
});

app.use(express.static('public'));

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    var TYPE = req.query.TYPE;
    ytdl(URL, {format: TYPE}).pipe(res);
});