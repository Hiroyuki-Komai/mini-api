const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Enthusiastic" });
});

module.exports = app;