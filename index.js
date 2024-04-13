require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");
const app = express();

const { PORT } = process.env;

app.use("/api/todos", routes);

app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}/api`)
);
