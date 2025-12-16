module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Department", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    departmentName: { type: DataTypes.STRING, allowNull: false }
  });
};
