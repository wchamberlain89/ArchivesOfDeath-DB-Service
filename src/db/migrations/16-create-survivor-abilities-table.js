module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SurvivorAbilities', {
      survivorId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Survivors',
          key: 'survivorId'
        },
        type: Sequelize.INTEGER
      },
      abilityId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Abilities',
          key: 'abilityId'
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
    return queryInterface.dropTable('SurvivorAbilities');
  }
};