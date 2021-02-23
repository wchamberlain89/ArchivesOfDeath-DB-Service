const { down } = require("./01-create-settlement")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Resources',
      'resourceType',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  }, 
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Resources', 'resourceType');
  }
}