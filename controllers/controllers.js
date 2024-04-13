const Todo = require("../models/todo");

const getAllTodos = async (req, res) => {
  const sortOptions = ["DESC", "ASC"];
  const { sort } = req.query;

  const allTodos = await Todo.findAll({
    order: [["createdAt", sortOptions[Number(sort === "ASC")]]],
  });

  res.send({ res: allTodos });
};

module.exports = { getAllTodos };
