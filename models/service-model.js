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
    wateruse: {
        type: String,
    },
    wastewatertreatment: {
        type: String,
    },
    wastewaterdischarge: {
        type: String,
    },
    chemicaluse: {
        type: String,
    },
    airemissions: {
        type: String,
    },
    solidwaste: {
        type: String,
    },
    otherpermits: {
        type: String,
    },
    additional: {
        type: String,
    },
    pipe: {
        type: String,
    },
    bore: {
        type: String,
    },
    surface: {
        type: String,
    },
    treated: {
        type: String,
    },
    sources: {
        type: String,
    },
    performed: {
        type: String,
    },
    notPerformed: {
        type: String,
    },
    treateds: {
        type: String,
    },
    treatment: {
        type: String,
    },
    biological: {
        type: String,
    },
    secondary: {
        type: String,
    },
    advanced: {
        type: String,
    },
    quantity: {
        type: String,
    },
    cost: {
        type: String,
    },
    yes1: {
        type: String,
    },
    no1: {
        type: String,
    },
    yes2: {
        type: String,
    },
    no2: {
        type: String,
    },
    waterusage: {
        type: String,
    },

    yes3: {
        type: String,
    },
    no3: {
        type: String,
    },
    avatar: {
        type: String,
    },
    treatment_capacity: {
        type: String,
    },
    yes4: {
        type: String,
    },
    no4: {
        type: String,
    },
    yes5: {
        type: String,
    },
    no5: {
        type: String,
    },
    yes6: {
        type: String,
    },
    no6: {
        type: String,
    },

    no6: {
        type: String,
    },

    yes7: {
        type: String,
    },

    no7: {
        type: String,
    },

    yes8: {
        type: String,
    },

    no8: {
        type: String,
    },

    yes9: {
        type: String,
    },

    no9: {
        type: String,
    },

    yes10: {
        type: String,
    },
    no10: {
        type: String,
    },
    yes11: {
        type: String,
    },
    no11: {
        type: String,
    },


    yes12: {
        type: String,
    },
    no12: {
        type: String,
    },
    yes13: {
        type: String,
    },
    no13: {
        type: String,
    },
    yes14: {
        type: String,
    },
    no14: {
        type: String,
    },
    yes15: {
        type: String,
    },
    no15: {
        type: String,
    },
    yes16: {
        type: String,
    },
    no16: {
        type: String,
    },
    yes17: {
        type: String,
    },
    no17: {
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



});

module.exports = mongoose.model('Service', ServiceSchema);