const express = require('express');
const router = express.Router();
const { postInformation, getInformations, getInformationById, deleteEntry } = require('../controllers/service');

router.post("/postInformation", postInformation);
router.post("/getInformations", getInformations);
router.post("/getInformationById", getInformationById);
router.post("/deleteEntry", deleteEntry);


module.exports = router;