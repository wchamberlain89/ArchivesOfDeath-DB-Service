'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    invId: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    settlementId: {
      allowNull: false,
      references: {
        model: "Settlement",
        key: "settlementId"
      },
      type: DataTypes.STRING,
    }
  }, {});
  Inventory.associate = function(models) {
    Inventory.belongsTo(models.Settlement, {
      foreignKey: 'settlementId'
    })
    Inventory.belongsToMany(models.Item, { through: models.InventoryItem, foreignKey: 'invId', as: 'items' });
  };
  return Inventory;
};