'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurvivorAbility = sequelize.define('SurvivorAbility', {
    survivorId: {
      allowNull:false,
      references: {
        model: "Survivor",
        key: "survivorId"
      },
      type: DataTypes.INTEGER,
    },
    abilityId: {
      allowNull: false,
      references: {
        model: "Ability",
        key: "abilityId"
      },
      type: DataTypes.INTEGER
    },
  }, {});
  SurvivorAbility.associate = function(models) {
    SurvivorAbility.belongsTo(models.Ability, { foreignKey: "abilityId", as: "info" });
    SurvivorAbility.belongsTo(models.Survivor, { foreignKey: "survivorId", as: "survivor" });
  };
  return SurvivorAbility;
};