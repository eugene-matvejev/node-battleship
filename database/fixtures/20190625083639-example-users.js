'use strict';

const crypto = require('crypto');

const email1 = 'user1@example.com';
const email2 = 'user2@example.com';
const email3 = 'user3@example.com';

const password = 'password';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const [
            user1,
            user2,
            user3,
        ] = await Promise.all([
            /** work around https://github.com/sequelize/sequelize/issues/11175 */
            queryInterface.bulkInsert(
                'users',
                [
                    {
                        email: email1,
                        password: crypto.createHmac('sha256', '').update(`${email1}:${password}`).digest('hex'),
                    },
                ],
                {
                    returning: true,
                }
            ),
            /** work around https://github.com/sequelize/sequelize/issues/11175 */
            queryInterface.bulkInsert(
                'users',
                [
                    {
                        email: email2,
                        password: crypto.createHmac('sha256', '').update(`${email2}:${password}`).digest('hex'),
                    },
                ],
                {
                    returning: true,
                }
            ),
            /** work around https://github.com/sequelize/sequelize/issues/11175 */
            queryInterface.bulkInsert(
                'users',
                [
                    {
                        email: email3,
                        password: crypto.createHmac('sha256', '').update(`${email3}:${password}`).digest('hex'),
                    },
                ],
                {
                    returning: true,
                }
            ),
        ]);

        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const user = Array.isArray(user1) ? user1[0].id : user1;
        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const friend1 = Array.isArray(user2) ? user2[0].id : user2;
        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const friend2 = Array.isArray(user3) ? user3[0].id : user3;

        return queryInterface.bulkInsert(
            'user_friendship',
            [
                {
                    user,
                    friend: friend1,
                },
                {
                    user,
                    friend: friend2,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            'users',
            {
                email: [
                    email1,
                    email2,
                    email3,
                ],
            },
            {}
        );
    },
};
