const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

//path for assets, such as JDK
app.get('/file/:lib/:filename', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public', req.params.lib, req.params.filename));
});

//path for index file, such as for JDK
app.get('/lib/:lib/index.yml', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public', req.params.lib, 'index.yml'));
});

const port = 4567;
app.listen(port);
console.log('Auth server listening on:', port);
