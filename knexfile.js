'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/personal_webpage'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
