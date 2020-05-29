'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Inventory, { through: models.InventoryItem, foreignKey: 'itemId' })
  };
  return Item;
};