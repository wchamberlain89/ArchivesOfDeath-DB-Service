'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InventoryItems', {
      invId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Inventories',
          key: 'invId'
        },
        type: Sequelize.INTEGER
      },
      itemId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Items',
          key: 'itemId'
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
    return queryInterface.dropTable('InventoryItems');
  }
};