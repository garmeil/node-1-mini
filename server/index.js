const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3001;

app.use(bodyParser.json());

const {
  read,
  create,
  update,
  destroy
} = require("./controllers/books_controller.js");

app.post("/api/books", create);
app.get("/api/books", read);
app.put("/api/books/:id", update);
app.delete("/api/books/:id", destroy);

app.listen(port, () => console.log(`Listening on Port: ${port}`));
