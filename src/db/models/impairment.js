'use strict';
module.exports = (sequelize, DataTypes) => {
  const Impairment = sequelize.define('Impairment', {
    impairmentId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    effect: DataTypes.TEXT
  }, {});
  Impairment.associate = function(models) {
    Impairment.belongsToMany(models.Survivor, { through: models.SurvivorImpairment, foreignKey: 'impairmentId' });
    Impairment.hasMany(models.SurvivorImpairment, { foreignKey: "impairmentId" });
  };
  return Impairment;
};