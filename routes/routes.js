const { Router } = require("express");
const router = Router();
const {
  getAllTodos,
  getTodoById,
  addNewTodo,
  updateTodoById,
} = require("../controllers/controllers");

router.get("/", getAllTodos);
router.post("/", addNewTodo);
router.get("/:id", getTodoById);
router.patch("/:id", updateTodoById);

module.exports = router;
