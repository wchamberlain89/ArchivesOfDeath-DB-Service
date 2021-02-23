'use strict';
module.exports = (sequelize, DataTypes) => {
  const SettlementResource = sequelize.define('SettlementResource', {
    settlementId: {
      allowNull:false,
      references: {
        model: "Settlement",
        key: "settlementId"
      },
      type: DataTypes.INTEGER,
    },
    resourceId: {
      allowNull: false,
      references: {
        model: "Resource",
        key: "resourceId"
      },
      type: DataTypes.INTEGER
    },
    qty: DataTypes.INTEGER
  }, {});
  SettlementResource.associate = function(models) {
    SettlementResource.belongsTo(models.Resource, { foreignKey: "resourceId", as: "resourceInfo" });
    SettlementResource.belongsTo(models.Settlement, { foreignKey: "settlementId", as: "settlement" });
  };
  return SettlementResource;
};