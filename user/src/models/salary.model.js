module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Salary", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    amount: { type: DataTypes.FLOAT, allowNull: false }
  });
};
