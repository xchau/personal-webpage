'use strict';

const knex = require('knex');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('hi from api');
});
