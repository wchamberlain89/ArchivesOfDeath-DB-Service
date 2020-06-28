'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gear = sequelize.define('Gear', {
    gearId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  Gear.associate = function(models) {
    Gear.belongsToMany(models.Settlement, { through: models.SettlementGear, foreignKey: 'gearId' }),
    Gear.hasMany(models.SettlementGear, { foreignKey: "gearId" });
  };
  return Gear;
};