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
    duration: {
        type: Integer
    },
    weight: {
        type: Integer
    },
    reps: {
        type: Integer
    },
    sets: {
        type: Integer
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;