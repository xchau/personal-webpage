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
      .string('img_name')
      .notNullable()
      .defaultTo('');
    table
      .string('img_size')
      .notNullable()
      .defaultTo('size1');
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
