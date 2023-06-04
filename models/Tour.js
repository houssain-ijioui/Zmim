const mongoose = require("mongoose");


const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    lunch: {
        type: Number,
        required: true
    },
    dinner: {
        type: Number,
        required: true
    },
    lunch_people: {
        type: [String]
    },
    dinner_people: {
        type: [String]
    }
}, {
    timestamps: true
});


const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;