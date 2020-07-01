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
    movement: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    accuracy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    strength: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    evasion: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    luck: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    freezeTableName: true
  });
  SurvivorAttributes.associate = function(models) {
    SurvivorAttributes.belongsTo(models.Survivor, { foreignKey: 'survivorId' })
  };
  return SurvivorAttributes;
};