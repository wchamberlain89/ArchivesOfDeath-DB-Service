'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SettlementResources', {
      settlementId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Settlements',
          key: 'settlementId'
        },
        type: Sequelize.INTEGER
      },
      resourceId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Resources',
          key: 'resourceId'
        },
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SettlementResources');
  }
};