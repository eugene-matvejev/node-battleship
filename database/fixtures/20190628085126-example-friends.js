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
            {}
        ).then(async (friendId) => {
            const [[{ id: userId }]] = await queryInterface.sequelize.query(`
                SELECT
                    id
                FROM
                    users
                WHERE
                    email = "user@example.com";`
            );

            return queryInterface.bulkInsert(
                'user_friendship',
                [
                    {
                        userId,
                        friendId: friendId - 1,
                    },
                    {
                        userId,
                        friendId,
                    },
                ],
                {}
            )
        });
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
