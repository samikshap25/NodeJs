module.exports = (sequelize, DataTypes) => {
  return sequelize.define("JobRole", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false }
  });
};
