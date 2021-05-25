const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    duration: 20,
    weight: 300,
    reps: 10,
    sets: 4
});