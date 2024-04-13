require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();

const { PORT } = process.env;

app.use(bodyParser.json());
app.use("/api/todos", routes);

app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}/api`)
);
