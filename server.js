const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();

app.use("/user", (req, res) => {
  res.render("forbidden");
});

app.use(express.static(path.join(__dirname, "/public")));

app.engine(".hbs", hbs());
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.get("/home", (req, res) => {
  res.render("home", { layout: false });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: false });
});

app.get("/hello/:name", (req, res) => {
  res.render("hello", { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.status(404).show("404.html");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
