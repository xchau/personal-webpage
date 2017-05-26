'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.disable('x-powered-by');

const index = path.join(__dirname, '..', 'public');
console.log(index);

app.use(express.static(index));

if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan');

  app.use(morgan('short'));

  app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

const projects = require('./routes/projects');

app.use('/api', projects);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
