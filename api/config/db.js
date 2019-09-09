const Sequelize = require("sequelize");

const sequelize = new Sequelize("BDPASQUALINI", "SA", "Pasqualini2019", {
  host: "localhost",
  dialect: "mssql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database: ", err);
  });

module.exports = sequelize;
