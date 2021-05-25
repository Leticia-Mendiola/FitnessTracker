const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require('./routes');
const db = require("./models");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

// app.use(routes);
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true,});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});