const { Router } = require("express");
const router = Router();
const { getAllTodos } = require("../controllers/controllers");

router.get("/", getAllTodos);

module.exports = router;
