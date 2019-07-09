'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'user_friendship',
            {
                user: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    references: { model: 'users', key: 'id' },
                    onDelete: 'CASCADE',
                },
                friend: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    references: { model: 'users', key: 'id' },
                    onDelete: 'CASCADE',
                },
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user_friendship');
    }
};
