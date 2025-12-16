const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user.model")(sequelize, Sequelize.DataTypes);
const Department = require("./department.model")(sequelize, Sequelize.DataTypes);
const JobRole = require("./jobRole.model")(sequelize, Sequelize.DataTypes);
const Salary = require("./salary.model")(sequelize, Sequelize.DataTypes);

/* Relations */
User.hasMany(Department, { foreignKey: "userId", onDelete: "CASCADE" });
Department.belongsTo(User, { foreignKey: "userId" });

User.hasOne(JobRole, { foreignKey: "userId", onDelete: "CASCADE" });
JobRole.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Salary, { foreignKey: "userId", onDelete: "CASCADE" });
Salary.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  sequelize,
  User,
  Department,
  JobRole,
  Salary
};
