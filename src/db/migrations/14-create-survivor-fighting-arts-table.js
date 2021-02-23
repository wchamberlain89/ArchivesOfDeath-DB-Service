module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SurvivorFightingArts', {
      survivorId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Survivors',
          key: 'survivorId'
        },
        type: Sequelize.INTEGER
      },
      fightingArtId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'FightingArts',
          key: 'fightingArtId'
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
    return queryInterface.dropTable('SurvivorFightingArts');
  }
};