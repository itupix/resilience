const express = require('express');
const app = express();
const http = require('http');

const statuses = [200, 204, 401, 500];
const getStatus = () => statuses[Math.floor(Math.random() * Math.floor(statuses.length))];
const data = {
  results: [
    '1er élément',
    '2e élément'
  ]
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/test', (req, res) => setTimeout(() => {
  const status = getStatus();
  
  if(status === 200) {
    res.json(data);
  } else {
    res.sendStatus(status);
  }
}, 1000));

http.createServer(app).listen(5000);