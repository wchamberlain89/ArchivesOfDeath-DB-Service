'use strict';
module.exports = (sequelize, DataTypes) => {
  const Disorder = sequelize.define('Disorder', {
    disorderId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    effect: DataTypes.TEXT
  }, {});
  Disorder.associate = function(models) {
    Disorder.belongsToMany(models.Survivor, { through: models.SurvivorDisorder, foreignKey: 'disorderId' });
  };
  return Disorder;
};