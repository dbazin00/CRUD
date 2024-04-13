const { Sequelize } = require("sequelize");

const sq = new Sequelize(process.env.POSTGRESQL_DB_URI);

const testDbConnection = async () => {
  try {
    await sq.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq, testDbConnection };
