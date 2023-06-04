const mongoose = require("mongoose");



const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expenses: {
        type: Number
    },
    expenses_tour_day: {
        type: Number
    },
    people: [{
        name: String,
        amount: Number
    }]
})



const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;