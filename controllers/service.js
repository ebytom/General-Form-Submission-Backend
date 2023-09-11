const serviceModel = require('../models/service-model')

module.exports.postInformation = async (req, res) => {
    try {
        console.log(req.body);
        const { name, orgName, mail, contact, address,
            country, unitInvestment, unitType,
            volume, end_product, countryInput, countryInput1,
            countryInput2, memberships, labour, women,
            permit, additional, sourcing,
            quantity, cost, waterusage, treatment_capacity,
            cost2, cost3, avatar1, avatar2, avatar3, treatmentFacility,
            practiceMethods, legalEnforcement, qualityStandards, untreatedWater,

            general, knowhow, large, legal, performanceValue, treatment, consumption,
            balance, usage, consumption2, balance2, usage2, consumption3, balance3,
            usage3, waste, liquid, domestic, records, temp,

            industrial1, industrial, domestic1, domestic2, clusterlevel, stakeholders,
            achievement, comments, financeaccess, water_recovery, industrial_sludge, others_display, loss,

            total_discharge, firstnamedomestic, firstnamedomestic1, firstnamedomestic2, firstnameprocess,
            firstnameprocess1, firstnameprocess2, waters
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
            unitType: unitType,
            country: country,
            unitInvestment: unitInvestment,
            volume: volume,
            end_product: end_product,
            countryInput: countryInput,
            countryInput1: countryInput1,
            countryInput2: countryInput2,
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
            loss: loss,

            treatmentFacility: treatmentFacility,
            practiceMethods: practiceMethods,
            legalEnforcement: legalEnforcement,
            qualityStandards: qualityStandards,
            untreatedWater: untreatedWater,

            industrial: industrial,
            industrial1: industrial1,
            domestic1: domestic1,
            domestic2: domestic2,
            clusterlevel: clusterlevel,
            stakeholders: stakeholders,
            achievement: achievement,
            financeaccess: financeaccess,
            comments: comments,
            industrial_sludge: industrial_sludge,
            water_recovery: water_recovery,
            others_display: others_display,

            total_discharge: total_discharge,
            firstnamedomestic: firstnamedomestic,
            firstnamedomestic1: firstnamedomestic1,
            firstnamedomestic2: firstnamedomestic2,
            firstnameprocess: firstnameprocess,
            firstnameprocess1: firstnameprocess1,
            firstnameprocess2: firstnameprocess2,
            waters: waters
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