const { Router } = require("express");
const Todo = require("../models/todo");

const router = Router();

router.get("/todos", (req, res) => {
  res.send();
});

module.exports = router;
