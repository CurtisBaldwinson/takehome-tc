'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('AppBlocks', {
            appId: {
                type: Sequelize.INTEGER
            },
            blockId: {
                type: Sequelize.INTEGER
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('AppBlocks');
    }
};