const express = require('express');
const router = express.Router();
const { postInformation, getInformations } = require('../controllers/service');

router.post("/postInformation", postInformation);
router.post("/getInformations", getInformations);


module.exports = router;