const serviceModel = require('../models/service-model')

module.exports.postInformation = async (req, res) => {
    try {
        console.log(req.body);
        const { name, orgName, mail, contact, address,
            country, unitInvestment,
            volume, end_product, countries, countries1,
            countries2, memberships, labour, women,
            permit, additional, sourcing,
            quantity, cost, waterusage, treatment_capacity,
            cost2, cost3, avatar1, avatar2, avatar3, treatmentFacility,
            practiceMethods, legalEnforcement, qualityStandards, untreatedWater,

            general, knowhow, large, legal, performanceValue, treatment, consumption,
            balance, usage, consumption2, balance2, usage2, consumption3, balance3,
            usage3, waste, liquid, domestic, records, temp
        } = req.body;
        if (!(name)) return res.status(500).json({
            error: "Missing some input field",
            msg: "error"
        })
        const id = new Date().getTime()
        console.log(id);

        const information = new serviceModel({
            informationId: id,
            name: name,
            orgName: orgName,
            mail: mail,
            contact: contact,
            address: address,
            country: country,
            unitInvestment: unitInvestment,
            volume: volume,
            end_product: end_product,
            countries: countries,
            countries1: countries1,
            countries2: countries2,
            memberships: memberships,
            labour: labour,
            women: women,
            permit: permit,
            additional: additional,
            sourcing: sourcing,
            quantity: quantity,
            cost: cost,
            waterusage: waterusage,
            treatment_capacity: treatment_capacity,
            cost2: cost2,
            cost3: cost3,
            avatar1: avatar1,
            avatar2: avatar2,
            avatar3: avatar3,

            treatment: treatment,
            general: general,
            knowhow: knowhow,
            large: large,
            legal: legal,
            performanceValue: performanceValue,
            consumption: consumption,
            balance: balance,
            usage: usage,
            consumption2: consumption2,
            balance2: balance2,
            usage2: usage2,
            consumption3: consumption3,
            balance3: balance3,
            usage3: usage3,
            waste: waste,
            liquid: liquid,
            domestic: domestic,
            records: records,
            temp: temp,

            treatmentFacility: treatmentFacility,
            practiceMethods: practiceMethods,
            legalEnforcement: legalEnforcement,
            qualityStandards: qualityStandards,
            untreatedWater: untreatedWater,
        });

        information.save()
            .then(result => res.status(201).json({
                msg: "Information added Successfully",
                data: "success"
            }))
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: error,
                    msg: "error"
                })
            })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}


module.exports.getInformations = async (req, res) => {
    try {
        var requests = await serviceModel.find({})
        if (req.body.searchVal) {
            requirements = requirements.filter(requirement => requirement.applicationName.startsWith(req.body.searchVal))
        }

        return res.status(200).json({
            requests: requests
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}


module.exports.getInformationById = async (req, res) => {
    try {
        const information = await serviceModel.find({
            informationId: req.body.informationId
        })

        console.log(information);
        return res.status(200).json({
            information: information[0]
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}