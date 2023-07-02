const express = require('express');
const router = express.Router();
const { postInformation, getInformations, getInformationById } = require('../controllers/service');

router.post("/postInformation", postInformation);
router.post("/getInformations", getInformations);
router.post("/getInformationById", getInformationById);


module.exports = router;