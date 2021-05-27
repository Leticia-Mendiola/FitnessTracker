const router = require('express').Router();
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false});

router.get('/workouts', (req,res) => {
  db.Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", ({ body }, res) => {
  db.Workout.updateOne(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workouts/:id", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
  // .then(totalDuration => {db.Workout.totalDuration()})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;