'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
        CREATE TABLE IF NOT EXISTS `user_friendship`
        (
            `createdAt` DATETIME NOT NULL,
            `updatedAt` DATETIME NOT NULL,
            `userId` INTEGER ,
            `friendId` INTEGER ,
            PRIMARY KEY (`userId`, `friendId`),
            FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (`friendId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
        ) ENGINE=InnoDB;
        */

        return queryInterface.createTable(
            'user_friendship',
            {
                userId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    references: { model: 'users', key: 'id' },
                },
                friendId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    references: { model: 'users', key: 'id' },
                },
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user_friendship');
    }
};
