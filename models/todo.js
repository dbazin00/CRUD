const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");

const Todo = sq.define("todo", {
  id: {
    type: DataTypes.UUID,
    defaultValue: sq.literal("gen_random_uuid()"),
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.sync();

module.exports = Todo;
