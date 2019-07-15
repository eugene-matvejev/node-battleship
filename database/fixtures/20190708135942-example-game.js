'use strict';

const orm = require('../../src/orm.js');

const email1 = 'user2@example.com';
const email2 = 'user3@example.com';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const id = await orm.Game.findOne({
            orderBy: [['id', 'DESC']],
            raw: true,
        }).then((v) => v === null ? 1 : v.id + 1);

        const [
            _game,
            [
                { id: user1 },
                { id: user2 },
            ],
        ] = await Promise.all([
            queryInterface.bulkInsert(
                'games',
                [
                    {
                        id,
                    },
                ],
                {
                    returning: true,
                    omitNull: true,
                }
            ),
            orm.User.findAll({
                attributes: ['id'],
                where: {
                    email: [email1, email2],
                },
                raw: true,
            }),
        ]);

        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const game = Array.isArray(_game) ? _game[0].id : _game;

        /** work around https://github.com/sequelize/sequelize/issues/11175 */
        const [
            _battlefield1,
            _battlefield2,
        ] = await Promise.all([
            queryInterface.bulkInsert(
                'battlefields',
                [
                    {
                        owner: user1,
                        game,
                    },
                ],
                {
                    returning: true,
                }
            ),
            queryInterface.bulkInsert(
                'battlefields',
                [
                    {
                        owner: user2,
                        game
                    },
                ],
                {
                    returning: true,
                }
            ),
        ]);

        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const battlefield1 = Array.isArray(_battlefield1) ? _battlefield1[0].id : _battlefield1;
        /** nasty 'work around' to make fixture work on SQLite/MySQL/PostreSQL */
        const battlefield2 = Array.isArray(_battlefield2) ? _battlefield2[0].id : _battlefield2;

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
        })(battlefield1, battlefield2);

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
