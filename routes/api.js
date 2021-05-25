const router = require('express').Router();
const express = require('express');
const app = express();
const db = require('../models');

app.get('/workouts', (req,res) => {
    db.Workout.find({})
    .populate("workout")
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
});

module.exports = router;