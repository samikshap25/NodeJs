const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ✅ EXACT FILE NAMES
db.User = require("./user.model")(sequelize, DataTypes);
db.Department = require("./department.model")(sequelize, DataTypes);

// ✅ RELATION
db.Department.hasMany(db.User);
db.User.belongsTo(db.Department);

module.exports = db;
