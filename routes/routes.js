const { Router } = require("express");
const router = Router();
const {
  getAllTodos,
  getTodoById,
  addNewTodo,
} = require("../controllers/controllers");

router.get("/", getAllTodos);
router.post("/", addNewTodo);
router.get("/:id", getTodoById);

module.exports = router;
