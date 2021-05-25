const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    type: "resistance",
    name: "Lateral Pull",
    duration: 20,
    weight: 300,
    reps: 10,
    sets: 4
});