const serviceModel = require('../models/service-model')

module.exports.postInformation = async (req, res) => {
    try {
        console.log(req.body);
        const { name, orgName, mail } = req.body;
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
            mail: mail
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
