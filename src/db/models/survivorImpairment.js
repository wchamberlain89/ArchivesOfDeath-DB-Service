'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurvivorImpairment = sequelize.define('SurvivorImpairment', {
    survivorId: {
      allowNull:false,
      references: {
        model: "Survivor",
        key: "survivorId"
      },
      type: DataTypes.INTEGER,
    },
    impairmentId: {
      allowNull: false,
      references: {
        model: "Impairment",
        key: "impairmentId"
      },
      type: DataTypes.INTEGER
    },
  }, {});
  SurvivorImpairment.associate = function(models) {
    SurvivorImpairment.belongsTo(models.Impairment, { foreignKey: "impairmentId", as: "info" });
    SurvivorImpairment.belongsTo(models.Survivor, { foreignKey: "survivorId", as: "survivor" });
  };
  return SurvivorImpairment;
};