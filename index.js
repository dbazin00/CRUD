require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const routes = require("./routes/routes");
const viewRoutes = require("./routes/viewRoutes");

const { PORT } = process.env;

const app = express();

app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: ".hbs",
  })
);

app.use(bodyParser.json());
app.use("/api/todos", routes);
app.use("/", viewRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
