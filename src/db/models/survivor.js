'use strict';
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
    survival: DataTypes.INTEGER,
    gender: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  Survivor.associate = function(models) {
    Survivor.belongsToMany(models.FightingArt, { through: models.SurvivorFightingArt, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Disorder, { through: models.SurvivorDisorder, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Ability, { through: models.SurvivorAbility, foreignKey: 'survivorId' });
    Survivor.belongsToMany(models.Impairment, { through: models.SurvivorImpairment, foreignKey: 'survivorId' });
    Survivor.belongsTo(models.Settlement, { foreignKey: "settlementId", as: "settlement" });
  };
  return Survivor;
};