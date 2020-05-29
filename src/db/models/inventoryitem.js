'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryItem = sequelize.define('InventoryItem', {
    // invId: {
    //   allowNull:false,
    //   references: {
    //     model: "Inventory",
    //     key: "invId"
    //   },
    //   type: DataTypes.INTEGER,
    // },
    // itemId: {
    //   allowNull: false,
    //   references: {
    //     model: "Item",
    //     key: "itemId"
    //   },
    //   type: DataTypes.INTEGER
    // },
    qty: DataTypes.INTEGER
  }, {});
  InventoryItem.associate = function(models) {
  };
  return InventoryItem;
};