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
      .string('github')
      .notNullable()
      .defaultTo('https://github.com/xchau');
    table
      .text('description')
      .notNullable()
      .defaultTo('');
    table
      .string('stack')
      .notNullable()
      .defaultTo('JavaScript');
    table
      .timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
