'use strict';

const knex = require('../../knex');
const router = require('express').Router();

router.get('/projects', (req, res, next) => {
  knex('projects')
    .orderBy('id')
    .then((projects) => {
      res.send(projects);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
