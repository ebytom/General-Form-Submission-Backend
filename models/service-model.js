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
    unitType: {
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
    countryInput: {
        type: String,
    },
    countryInput1: {
        type: String,
    },
    countryInput2: {
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
    treatmentFacility: {
        type: Array,
    },
    practiceMethods: {
        type: Array,
    },
    legalEnforcement: {
        type: Array,
    },
    qualityStandards: {
        type: Array,
    },
    untreatedWater: {
        type: Array,
    },
    loss: {
        type: String,
    },



    industrial: {
        type: String,
    },
    industrial1: {
        type: String,
    },
    domestic1: {
        type: String,
    },
    domestic2: {
        type: String,
    },
    clusterlevel: {
        type: String,
    },
    stakeholders: {
        type: String,
    },
    achievement: {
        type: String,
    },
    financeaccess: {
        type: String,
    },
    comments: {
        type: String,
    },
    industrial_sludge: {
        type: String,
    },
    water_recovery: {
        type: String,
    },
    others_display: {
        type: String,
    },

    total_discharge: {
        type: String,
    },
    firstnamedomestic: {
        type: String,
    },
    firstnamedomestic1: {
        type: String,
    },
    firstnamedomestic2: {
        type: String,
    },
    firstnameprocess: {
        type: String,
    },
    firstnameprocess1: {
        type: String,
    },
    firstnameprocess2: {
        type: String,
    },
    waters: {
        type: String,
    }

});

module.exports = mongoose.model('Service', ServiceSchema);