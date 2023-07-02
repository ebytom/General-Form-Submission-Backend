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
    },

    contact: {
        type: String,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    unitInvestment: {
        type: String,
    },
    volume: {
        type: String,
    },
    end_product: {
        type: String,
    },
    countries: {
        type: String,
    },
    countries1: {
        type: String,
    },
    countries2: {
        type: String,
    },
    memberships: {
        type: String,
    },
    labour: {
        type: String,
    },
    women: {
        type: String,
    },
    permit: {
        type: Array,
    },
    additional: {
        type: String,
    },
    sourcing: {
        type: Array,
    },

    quantity: {
        type: String,
    },
    cost: {
        type: String,
    },
    waterusage: {
        type: String,
    },
    avatar: {
        type: String,
    },
    treatment_capacity: {
        type: String,
    },
    cost2: {
        type: String,
    },
    cost3: {
        type: String,
    },
    avatar1: {
        type: String,
    },
    avatar2: {
        type: String,
    },
    avatar3: {
        type: String,
    },

    treatment: {
        type: String,
    },
    general: {
        type: String,
    },
    knowhow: {
        type: String,
    },
    large: {
        type: String,
    },
    legal: {
        type: String,
    },
    performanceValue: {
        type: String,
    },
    consumption: {
        type: String,
    },
    balance: {
        type: String,
    },
    usage: {
        type: String,
    },
    consumption2: {
        type: String,
    },
    balance2: {
        type: String,
    },
    usage2: {
        type: String,
    },
    consumption3: {
        type: String,
    },
    balance3: {
        type: String,
    },
    usage3: {
        type: String,
    },
    waste: {
        type: String,
    },
    liquid: {
        type: String,
    },
    domestic: {
        type: String,
    },
    records: {
        type: String,
    },
    temp: {
        type: String,
    },


});

module.exports = mongoose.model('Service', ServiceSchema);