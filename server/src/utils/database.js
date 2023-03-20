const { Sequelize } = require("sequelize");

const database = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "alusik1207",
  password: "Kla230311",
  database: "finance_database",
  dialect: "mysql",
});
module.exports = database;
