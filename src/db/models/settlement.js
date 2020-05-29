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
    Settlement.hasOne(models.Inventory, {
      foreignKey: 'settlementId'
    })
  };
  return Settlement;
};