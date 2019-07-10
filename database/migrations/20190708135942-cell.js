'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'cells',
            {
                id: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    onDelete: 'CASCADE',
                },
                coordinate: {
                    type: Sequelize.STRING(3),
                    allowNull: false,
                },
                battlefield: {
                    // type: Sequelize.UUID,
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                seq: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cells');
    }
};
