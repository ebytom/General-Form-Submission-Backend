const form2Model = require('../models/form2-model');
const serviceModel = require('../models/service-model')

module.exports.postForm = async (req, res) => {

    console.log(req.body)

    const form2 = await form2Model.create(req.body);

    if (!form2) {
        return next(new ErrorHandler("Error, could not save form2", 401));
    }

    res.status(201).json({
        success: true,
        message: "Form2 details added successfully"
    });
}


module.exports.getForm = async (req, res) => {
    try {
        var form = await form2Model.find({})
        if (req.body.searchVal) {
            requirements = requirements.filter(requirement => requirement.applicationName.startsWith(req.body.searchVal))
        }

        return res.status(200).json({
            form: form
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}


module.exports.getFormById = async (req, res) => {
    try {
        const form = await form2Model.find({
            form2Id: req.body.form2Id
        })
        return res.status(200).json({
            form: form[0]
        })
    }
    catch (error) {
        return res.status(500).json({
            error: error,
            msg: "error"
        });
    }
}