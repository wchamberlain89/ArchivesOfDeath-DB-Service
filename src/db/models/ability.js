'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ability = sequelize.define('Ability', {
    abilityId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    effect: DataTypes.TEXT
  }, {});
  Ability.associate = function(models) {
    Ability.belongsToMany(models.Survivor, { through: models.SurvivorAbility, foreignKey: 'abilityId' });
  };
  return Ability;
};