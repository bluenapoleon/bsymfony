import * as path from 'path'

var express = require('express');

var app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/tags/:tag', (req, res) => {
  res.sendFile(path.join(__dirname, '../tags.html'))
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../style.css'));
})

app.get('/assets/js/:file', (req, res) => {
  res
    .type('.js')
    .sendFile(path.join(__dirname, '../assets', 'js', req.params.file));
})

app.listen(3000);