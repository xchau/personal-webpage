'use strict';

exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([{
        id: 1,
        title: 'Blip',
        img_name: 'blip-tn.jpg',
        img_size: 'size3',
        description: 'Blip serves as a recipe book for travel, where users may share their experiences abroad or follow in another’s footsteps to adopt their experiences. Developed with React Native, Xcode, Redux, Node.js (Express) and PostgresQL. iOS only.',
        created_at: '2017-04-01 19:42:16.964-07',
        updated_at: new Date,
      }, {
        id: 2,
        title: 'this.city',
        img_name: 'blip-tn.jpg',
        img_size: 'size2',
        description: 'Developed with React Native, Android SDK, Node.js (Express) and PostgresQL, this.city is a Waze-like Android application that allows users to pin gripes or concerns about their city.',
        created_at: '2017-02-15 19:42:16.964-07',
        updated_at: new Date
      }, {
        id: 3,
        title: 'LENDit',
        img_name: 'lendit-tn.png',
        img_size: 'size1',
        description: 'A community-based sharing web app built front to back-end using HTML, Materialize CSS, JavaScript, Node.js (Express) and PostgresQL. LENDit allows users in the Seattle area to conveniently share items from a collective pool of shared belongings.',
        created_at: '2017-01-01 19:42:16.964-07',
        updated_at: new Date
      }]);
    });
};
