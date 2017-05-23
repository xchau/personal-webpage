'use strict';

const knex = require('../../knex');
const router = require('express').Router();
const { camelizeKeys } = require('humps');

router.get('/projects', (req, res, next) => {
  knex('projects')
    .orderBy('id')
    .then((projects) => {
      res.send(camelizeKeys(projects));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
