const app = require("./src/app");
const { sequelize } = require("./src/models");

sequelize.sync({ alter: true }).then(() => {
  console.log("DB synced");
  app.listen(3000, () => console.log("Server running on 3000"));
});
