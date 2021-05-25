const router = require('express').Router();
const express = require('express');
const db = require('../models');

router.get('/workouts', (req,res) => {
    db.Workout.find({})
    .populate("workout")
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/workouts", ({ body }, res) => {
  db.Workout.updateOne(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;