'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurvivorDisorder = sequelize.define('SurvivorDisorder', {
    survivorId: {
      allowNull:false,
      references: {
        model: "Survivor",
        key: "survivorId"
      },
      type: DataTypes.INTEGER,
    },
    disorderId: {
      allowNull: false,
      references: {
        model: "Disorder",
        key: "disorderId"
      },
      type: DataTypes.INTEGER
    },
  }, {});
  SurvivorDisorder.associate = function(models) {
    SurvivorDisorder.belongsTo(models.Disorder, { foreignKey: "disorderId", as: "info" });
    SurvivorDisorder.belongsTo(models.Survivor, { foreignKey: "survivorId", as: "survivor" });
  };
  return SurvivorDisorder;
};