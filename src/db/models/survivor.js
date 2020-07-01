'use strict';
const models = require('./index');
const SurvivorAttributes = models.SurvivorAttributes;

module.exports = (sequelize, DataTypes) => {
  const Survivor = sequelize.define('Survivor', {
    survivorId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    settlementId: {
      allowNull: false,
      references: {
        model: "Settlement",
        key: "settlementId"
      },
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    survival: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    gender: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate(survivor, options) {
        survivor.sequelize.models.SurvivorAttributes.create({ survivorId: survivor.survivorId });
      }
    },
  });
  Survivor.associate = function(models) {
    Survivor.belongsToMany(models.FightingArt, { through: models.SurvivorFightingArt, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Disorder, { through: models.SurvivorDisorder, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Ability, { through: models.SurvivorAbility, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Impairment, { through: models.SurvivorImpairment, foreignKey: 'survivorId' });
    Survivor.belongsTo(models.Settlement, { foreignKey: "settlementId", as: "settlement" });
    Survivor.hasOne(models.SurvivorAttributes, { foreignKey: "survivorId" });
  };
  return Survivor;
};