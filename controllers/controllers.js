const Todo = require("../models/todo");

const getAllTodos = async (req, res) => {
  const sortOptions = ["DESC", "ASC"];
  const sort = sortOptions.includes(req.query.sort) ? req.query.sort : "DESC";

  const allTodos = await Todo.findAll({
    order: [["createdAt", sort]],
  });

  res.send({ res: allTodos });
};

module.exports = { getAllTodos };
