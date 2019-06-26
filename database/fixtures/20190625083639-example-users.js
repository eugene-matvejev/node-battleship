'use strict';

const crypto = require('crypto');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'example@example.com',
          password: crypto.createHmac('sha256', '').update('example@example.com:password').digest('hex'),
        },
        {
          email: 'banned@example.com',
          password: crypto.createHmac('sha256', '').update('banned@example.com:password').digest('hex'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
 
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
