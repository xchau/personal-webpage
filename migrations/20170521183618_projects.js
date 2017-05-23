'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('projects', (table) => {
    table
      .increments();
    table
      .string('title')
      .notNullable()
      .defaultTo('');
    table
      .string('img')
      .notNullable()
      .defaultTo('');
    table
      .text('description')
      .notNullable()
      .defaultTo('');
    table
      .timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
