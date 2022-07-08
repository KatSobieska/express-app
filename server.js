const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
