module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disorders', {
      survivorId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Survivors',
          key: 'survivorId'
        },
        type: Sequelize.INTEGER
      },
      disorderId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Disorders',
          key: 'disorderId'
        },
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
    return queryInterface.dropTable('Disorders');
  }
};