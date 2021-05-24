const express = require("express");
const { job } = require("./jobs");
const cors = require("cors");
const router = require("./routes/apiRouter");
require("dotenv").config();
const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Cluster"));

// Start the recurring job
job.start();

// phoneNumbers.create({ phoneNumber: 6475695400 });
// Express app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("./views"));
app.use(cors());
app.use("/api", router);

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Aarya" });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
