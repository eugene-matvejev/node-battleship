'use strict';

const email1 = 'user2@example.com';
const email2 = 'user3@example.com';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const [
            game,
            [[{ id: user1 }, { id: user2 }]]
        ] = await Promise.all([
            queryInterface.bulkInsert(
                'games',
                [
                    {
                        id: null,
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
                    email IN ("${email1}", "${email2}");`
            ),
        ]);

        const battlefield = await queryInterface.bulkInsert(
            'battlefields',
            [
                {
                    owner: user1,
                    game,
                },
                {
                    owner: user2,
                    game
                },
            ],
            {}
        );

        const cells = ((...battlefields) => {
            const cells = [];

            for (const battlefield of battlefields) {
                for (let x = 65; x < 75; x++) {
                    for (let y = 1; y < 11; y++) {
                        cells.push(
                            {
                                coordinate: `${String.fromCharCode(x)}${y}`,
                                seq: 0,
                                battlefield,
                            }
                        );
                    }
                }
            }

            return cells;
        })(battlefield - 1, battlefield);

        return queryInterface.bulkInsert(
            'cells',
            cells,
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkDelete(
                'games',
                {
                },
                {}
            ),
            queryInterface.bulkDelete(
                'battlefields',
                {
                },
                {}
            ),
            queryInterface.bulkDelete(
                'cells',
                {
                },
                {}
            ),
        ]);
    },
};
