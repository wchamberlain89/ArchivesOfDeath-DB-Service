module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SettlementGear', {
      settlementId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Settlements',
          key: 'settlementId'
        },
        type: Sequelize.INTEGER
      },
      gearId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Gear',
          key: 'gearId'
        },
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SettlementGear');
  }
};