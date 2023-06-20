const express = require('express');
const router = express.Router();
const { postInformation } = require('../controllers/service');

router.post("/postInformation", postInformation);


module.exports = router;