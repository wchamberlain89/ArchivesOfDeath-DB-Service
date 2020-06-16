'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryItem = sequelize.define('InventoryItem', {
    invId: {
      allowNull:false,
      references: {
        model: "Inventory",
        key: "invId"
      },
      type: DataTypes.INTEGER,
    },
    itemId: {
      allowNull: false,
      references: {
        model: "Item",
        key: "itemId"
      },
      type: DataTypes.INTEGER
    },
    qty: DataTypes.INTEGER
  }, {});
  InventoryItem.associate = function(models) {
    InventoryItem.belongsTo(models.Item, { foreignKey: "itemId" });
    InventoryItem.belongsTo(models.Inventory, { foreignKey: "invId" });
  };
  return InventoryItem;
};