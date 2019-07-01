'use strict';

const crypto = require('crypto');

const email1 = 'user2@example.com';
const email2 = 'user3@example.com';
const password = 'password';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'users',
            [
                {
                    email: email1,
                    password: crypto.createHmac('sha256', '').update(`${email1}:${password}`).digest('hex'),
                },
                {
                    email: email2,
                    password: crypto.createHmac('sha256', '').update(`${email2}:${password}`).digest('hex'),
                },
            ],
            { 
                returning: true,
                hooks: true,
                individualHooks: true,
            }
        ).then((...args) => console.log({ args, models: Sequelize.models, Sequelize }));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            'users',
            {
                email: [email1, email2],
            },
            {}
        );
    },
};
