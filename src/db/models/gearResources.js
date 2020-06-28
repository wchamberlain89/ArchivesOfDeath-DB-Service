module.exports = (sequelize, DataTypes) => {
  const SettlementGear = sequelize.define('SettlementGear', {
    settlementId: {
      allowNull:false,
      references: {
        model: "Settlement",
        key: "settlementId"
      },
      type: DataTypes.INTEGER,
    },
    gearId: {
      allowNull: false,
      references: {
        model: "Gear",
        key: "gearId"
      },
      type: DataTypes.INTEGER
    },
    qty: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  SettlementGear.associate = function(models) {
    SettlementGear.belongsTo(models.Gear, { foreignKey: "gearId", as: "gearInfo" });
    SettlementGear.belongsTo(models.Settlement, { foreignKey: "settlementId", as: "settlement" });
  };
  return SettlementGear;
};