'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    resourceId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    resourceType: DataTypes.STRING
  }, {});
  Resource.associate = function(models) {
    Resource.belongsToMany(models.Settlement, { through: models.SettlementResource, foreignKey: 'resourceId' }),
    Resource.hasMany(models.SettlementResource, { foreignKey: "resourceId" });
  };
  return Resource;
};