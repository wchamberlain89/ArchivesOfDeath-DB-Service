'use strict';
module.exports = (sequelize, DataTypes) => {
  const Settlement = sequelize.define('Settlement', {
    settlementId: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, {});
  Settlement.associate = function(models) {
    Settlement.belongsToMany(models.Resource, { through : models.SettlementResource, foreignKey : "settlementId" })
    Settlement.belongsToMany(models.Gear, { through : models.SettlementGear, foreignKey : "settlementId" })
  };
  return Settlement;
};