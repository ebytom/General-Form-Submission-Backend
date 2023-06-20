const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    informationId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
    },
    orgName: {
        type: String,
    },
    mail: {
        type: String,
    }

});

module.exports = mongoose.model('Service', ServiceSchema);