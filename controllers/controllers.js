const Todo = require("../models/todo");
const {
  INFOBIP_ENDPOINT,
  INFOBIP_API_KEY,
  INFOBIP_SENDER_NUMBER,
  INFOBIP_RECEIVER_NUMBER,
} = process.env;

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
    .catch(() => res.send(`Todo with id: ${id} not found!`));
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
          if (done && done !== todoById.done)
            fetch(
              `https://${INFOBIP_ENDPOINT}.api.infobip.com/sms/2/text/advanced`,
              {
                method: "POST",
                headers: {
                  Authorization: INFOBIP_API_KEY,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [
                    {
                      destinations: [
                        {
                          to: INFOBIP_RECEIVER_NUMBER,
                        },
                      ],
                      from: INFOBIP_SENDER_NUMBER,
                      text: `${todoById.text} is done`,
                    },
                  ],
                }),
              }
            )
              .then(() => res.send("Message sent!"))
              .catch(() => res.send("Message not sent!"));
        })
        .then(() => {
          if (!(done && done !== todoById.done))
            return res.send(`${todoById.text} successfully updated!`);
        })
        .catch((reject) => res.send(reject))
    )
    .catch(() => res.send(`Todo with id: ${id} not found!`));
};

const deleteTodoById = (req, res) => {
  const { id } = req.params;

  Todo.destroy({
    where: {
      id,
    },
  })
    .then(() => res.send(`Todo with id: ${id} deleted!`))
    .catch(() => res.send(`Todo with id: ${id} not found!`));
};

module.exports = {
  getAllTodos,
  getTodoById,
  addNewTodo,
  updateTodoById,
  deleteTodoById,
};
