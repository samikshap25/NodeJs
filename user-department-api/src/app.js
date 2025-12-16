require("dotenv").config(); // 👈 FIRST LINE, NO IMPORTS ABOVE

const express = require("express");
const app = express();

const sequelize = require("./config/sequelize"); // AFTER dotenv

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
