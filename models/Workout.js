const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Workout Type is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Exercise Name is Required"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;