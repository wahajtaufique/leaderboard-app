const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    playerLocation: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("players", playerSchema);