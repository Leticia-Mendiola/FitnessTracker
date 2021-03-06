const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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
    }],
});

WorkoutSchema.methods.setTotalDuration = function() {
    this.totalDuration = this.aggregate({
        $addFields: {totalDuration: { $sum: "$duration" }}
    });

    return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;