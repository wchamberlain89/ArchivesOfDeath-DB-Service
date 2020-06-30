'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurvivorAttributes = sequelize.define('SurvivorAttributes', {
    survivorAttributesId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    survivorId: {
      allowNull: false,
      references: {
        model: "Survivor",
        key: "survivorId"
      },
      type: DataTypes.INTEGER
    },
    movement: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    evasion: DataTypes.INTEGER,
    luck: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  SurvivorAttributes.associate = function(models) {
    SurvivorAttributes.belongsTo(models.Survivor, { foreignKey: 'survivorId' })
  };
  return SurvivorAttributes;
};