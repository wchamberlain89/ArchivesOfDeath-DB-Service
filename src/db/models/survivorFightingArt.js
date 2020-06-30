'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurviviorFightingArt = sequelize.define('SurviviorFightingArt', {
    survivorId: {
      allowNull:false,
      references: {
        model: "Survivor",
        key: "survivorId"
      },
      type: DataTypes.INTEGER,
    },
    fightingArtId: {
      allowNull: false,
      references: {
        model: "FightingArt",
        key: "fightingArtId"
      },
      type: DataTypes.INTEGER
    },
  }, {
    freezeTableName: true
  });
  SurviviorFightingArt.associate = function(models) {
    SurviviorFightingArt.belongsTo(models.FightingArt, { foreignKey: "fightingArtId", as: "info" });
    SurviviorFightingArt.belongsTo(models.Survivor, { foreignKey: "survivorId", as: "survivor" });
  };
  return SurviviorFightingArt;
};