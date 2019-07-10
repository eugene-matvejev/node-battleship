'use strict';

const crypto = require('crypto');

const email1 = 'user2@example.com';
const email2 = 'user3@example.com';
const password = 'password';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const [
            friend1,
            friend2,
            [[{ id: user }]],
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
                {}
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
                {}
            ),
            queryInterface.sequelize.query(`
                SELECT
                    id
                FROM
                    users
                WHERE
                    email = "user@example.com";`
            ),
        ]);

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
                email: [email1, email2],
            },
            {}
        );
    },
};
