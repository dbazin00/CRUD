const Todo = require("../models/todo");

const getAllTodos = (req, res) => {
  const sortOptions = ["DESC", "ASC"];
  const { sort } = req.query;

  Todo.findAll({
    order: [["createdAt", sortOptions[Number(sort === "ASC")]]],
  })
    .then((result) => res.send(result))
    .catch((reject) => res.send(reject));
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

const updateTodoById = async (req, res) => {
  const { id } = req.params;
  const { done, text } = req.body;

  Todo.findByPk(id)
    .then((todoById) => (todoById = todoById.dataValues))
    .then((todoById) =>
      Todo.update({ done, text }, { where: { id: id } })
        .then(() => {
          if (done && done !== todoById.done) console.log("Send SMS");
        })
        .then(() => res.send())
        .catch((reject) => res.send(reject))
    )
    .catch(() => res.send(`User with id: ${id} not found!`));
};

module.exports = { getAllTodos, getTodoById, addNewTodo, updateTodoById };
