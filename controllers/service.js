const serviceModel = require('../models/service-model')

module.exports.postInformation = async (req, res) => {
    try {
        console.log(req.body);
        const { name, orgName, mail, contact, address,
            country, below25, above25, above5, above10,
            volume, end_product, countries, countries1,
            countries2, memberships, labour, women,
            wateruse, wastewatertreatment, wastewaterdischarge,
            chemicaluse, airemissions, solidwaste, otherpermits,
            additional, pipe, bore, surface, treated, sources,
            performed, notPerformed, treateds, treatment,
            biological, secondary, advanced, quantity, cost,
            yes1, no1, yes2, no2, waterusage, yes3, no3,
            treatment_capacity, yes4, no4, yes5, no5, yes6, no6,
            yes7, no7, yes8, no8, yes9, no9, yes10, no10, yes11,
            no11, yes12, no12, yes13, no13, yes14, no14, yes15,
            no15, yes16, no16, yes17, no17, cost2, cost3, avatar1, avatar2, avatar3 } = req.body;
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
            below25: below25,
            above25: above25,
            above5: above5,
            above10: above10,
            volume: volume,
            end_product: end_product,
            countries: countries,
            countries1: countries1,
            countries2: countries2,
            memberships: memberships,
            labour: labour,
            women: women,
            wateruse: wateruse,
            wastewatertreatment: wastewatertreatment,
            wastewaterdischarge: wastewaterdischarge,
            chemicaluse: chemicaluse,
            airemissions: airemissions,
            solidwaste: solidwaste,
            otherpermits: otherpermits,
            additional: additional,
            pipe: pipe,
            bore: bore,
            surface: surface,
            treated: treated,
            sources: sources,
            performed: performed,
            notPerformed: notPerformed,
            treateds: treateds,
            treatment: treatment,
            biological: biological,
            secondary: secondary,
            advanced: advanced,
            quantity: quantity,
            cost: cost,
            yes1: yes1,
            no1: no1,
            yes2: yes2,
            no2: no2,
            waterusage: waterusage,
            yes3: yes3,
            no3: no3,
            treatment_capacity: treatment_capacity,
            yes4: yes4,
            no4: no4,
            yes5: yes5,
            no5: no5,
            yes6: yes6,
            no6: no6,
            yes7: yes7,
            no7: no7,
            yes8: yes8,
            no8: no8,
            yes9: yes9,
            no9: no9,
            yes10: yes10,
            no10: no10,
            yes11: yes11,
            no11: no11,


            yes12: yes12,
            no12: no12,
            yes13: yes13,
            no13: no13,
            yes14: yes14,
            no14: no14,
            yes15: yes15,
            no15: no15,
            yes16: yes16,
            no16: no16,
            yes17: yes17,
            no17: no17,
            cost2: cost2,
            cost3: cost3,
            avatar1: avatar1,
            avatar2: avatar2,
            avatar3: avatar3,
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
