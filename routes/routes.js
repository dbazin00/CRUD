const { Router } = require("express");
const router = Router();
const { getAllTodos, getTodoById } = require("../controllers/controllers");

router.get("/", getAllTodos);
router.get("/:id", getTodoById);

module.exports = router;
