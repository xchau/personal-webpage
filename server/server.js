'use strict';

const express = require('express');
const app = express();

app.disable('x-powered-by');

const morgan = require('morgan');

app.use(morgan('short'));

const projects = require('./routes/projects');

app.use(projects);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500);
});
