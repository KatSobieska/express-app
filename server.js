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
app.engine(
  "hbs",
  hbs({ extname: "hbs", layoutsDir: "./layouts", defaultLayout: "main" })
);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", { layout: "dark" });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/hello/:name", (req, res) => {
  res.render("hello", { name: req.params.name });
});

app.post("/contact/send-message", (req, res) => {
  const { author, sender, title, message } = req.body;

  if (author && sender && title && message) {
    res.send("The message has been sent!");
  } else {
    res.send("You can't leave fields empty");
  }
});

app.use((req, res) => {
  res.status(404).show("404.html");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
