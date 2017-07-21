'use strict';

exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([{
        id: 1,
        title: 'Blip',
        img_name: 'blip-tn.jpg',
        img_size: 'size3',
        github: 'https://github.com/xchau/blip',
        description: 'Blip serves as a recipe book for travel, where users may share their experiences abroad or follow in another’s footsteps to adopt their experiences. User experience is streamlined to minimize in-app time and maximize in-the-moment time. iOS only.',
        stack: 'React Native, Redux, Xcode, Cloudinary, Node, Express, PostgresQL',
        created_at: '2017-04-01 19:42:16.964-07',
        updated_at: new Date,
      }, {
        id: 2,
        title: 'this.city',
        img_name: 'thiscity-tn.png',
        img_size: 'size2',
        github: 'https://github.com/xchau/this-city',
        description: 'This.city (excuse the nerdy play-on-words) is a Waze-like Android application that allows users to pin gripes or concerns about their city. Additional features include the ability to add photos and up/down vote issues. Android only.',
        stack: 'React Native, Android Studio, Android SDK, Google Maps, Node, Express, PostgresQL',
        created_at: '2017-02-15 19:42:16.964-07',
        updated_at: new Date
      }, {
        id: 3,
        title: 'LENDit',
        img_name: 'lendit-tn.png',
        img_size: 'size1',
        github: 'https://github.com/xchau/lendit-app',
        description: 'A community-based sharing web app, LENDit allows users in the Seattle area to conveniently share items from a collective pool of shared belongings. Users and items may be favorited. Communication between users is done through email thanks to Mailgun.',
        stack: 'HTML, CSS, JavaScript, Node, Express, PostgresQL',
        created_at: '2017-01-01 19:42:16.964-07',
        updated_at: new Date
      }, {
        id: 4,
        title: 'Miser',
        img_name: 'miser-tn.png',
        img_size: 'size1',
        github: 'https://github.com/xchau/miser-deals',
        description: 'Miser is made for the user looking for something fun to do on the cheap. This web app combines the Google Maps and Sqoot API to provide users with dining and entertainment deals nearby.',
        stack: 'HTML, Materialize CSS, JavaScript, jQuery, Google Maps, Sqoot API',
        created_at: '2017-12-01 19:42:16.964-07',
        updated_at: new Date
      }, {
        id: 5,
        title: 'Geofindr',
        img_name: 'geofindr-tn.png',
        img_size: 'size1',
        github: 'https://github.com/xchau/react-geofindr',
        description: 'This Geoguessr clone is a fun way to learn about the world around us. Users are placed street-view in a mystery location and must pinpoint where they are with the provided contextual clues. More hints can be revealed in exchange for points.',
        stack: 'React, Google Maps, Node, Express, PostgresQL',
        created_at: '2017-2-20 19:42:16.964-07',
        updated_at: new Date
      },
      {
        id: 6,
        title: 'Group Randomizer',
        img_name: 'group-randomizer-tn.png',
        img_size: 'size1',
        github: 'https://github.com/xchau/group-randomizer',
        description: 'A quick project leveraging React.js. Splits a string of comma-separated names into specified number of groups.',
        stack: 'React, JavaScript, Mocha, Chai, Enzyme',
        created_at: '2017-7-10 19:42:16.964-07',
        updated_at: new Date
      }, {
        id: 7,
        title: 'Group Randomizer',
        img_name: 'r-snake-tn.png',
        img_size: 'size1',
        github: 'https://github.com/xchau/xc-react-snake',
        description: 'Using a canvas element to manipulate pixel locations would be the easy way to create the classic arcade game Snake. I chose to leverage React\'s statefulness and quick rendering to create my version of Snake instead. Have fun!',
        stack: 'React, JavaScript',
        created_at: '2017-7-20 19:42:16.964-07',
        updated_at: new Date
      },
    ]);
  });
};
