const Todo = require("../models/todo");

const getAllTodos = async (req, res) => {
  const sortOptions = ["DESC", "ASC"];
  const { sort } = req.query;

  const allTodos = await Todo.findAll({
    order: [["createdAt", sortOptions[Number(sort === "ASC")]]],
  });

  res.send({ res: allTodos });
};

const getTodoById = (req, res) => {
  const { id } = req.params;

  Todo.findByPk(id)
    .then((todoById) => res.send(todoById))
    .catch(() => res.send(`User with id: ${id} not found!`));
};

const addNewTodo = (req, res) => {
  Todo.create(req.body)
    .then((result) => res.send(result))
    .catch((reject) => res.send(reject));
};

module.exports = { getAllTodos, getTodoById, addNewTodo };
