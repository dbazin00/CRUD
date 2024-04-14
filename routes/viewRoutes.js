const { Router } = require("express");
const router = Router();

const { PORT } = process.env;

router.get("/", (req, res) =>
  fetch(`http://localhost:${PORT}/api/todos`, {
    method: "GET",
  })
    .then((result) => result.json())
    .then((data) => res.render("main", { layout: "index", allTodos: data }))
    .catch((err) => res.send(err))
);
module.exports = router;
