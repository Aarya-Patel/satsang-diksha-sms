const express = require("express");
require("dotenv").config();
const { job } = require("./jobs");

job.start();

// Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Use ejs as our template engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Aarya" });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
