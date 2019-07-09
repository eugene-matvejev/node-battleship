'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'battlefields',
            {
                id: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    onDelete: 'CASCADE',
                },
                owner: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                game: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    onDelete: 'CASCADE',
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('battlefields');
    }
};
