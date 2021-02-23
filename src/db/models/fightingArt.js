'use strict';
module.exports = (sequelize, DataTypes) => {
  const FightingArt = sequelize.define('FightingArt', {
    fightingArtId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    effect: DataTypes.TEXT
  }, {});
  FightingArt.associate = function(models) {
    FightingArt.belongsToMany(models.Survivor, { through: models.SurvivorFightingArt, foreignKey: 'fightingArtId' });
    FightingArt.hasMany(models.SurvivorFightingArt, { foreignKey: "fightingArtId" });
  };
  return FightingArt;
};