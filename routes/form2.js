const express = require('express');
const { postForm, getForm, getFormById } = require('../controllers/form2');
const router = express.Router();

router.post("/postForm", postForm);
router.post("/getForm", getForm);
router.post("/getFormById", getFormById);


module.exports = router;