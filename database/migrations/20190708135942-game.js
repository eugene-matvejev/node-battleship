'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'games',
            {
                id: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('games');
    }
};
