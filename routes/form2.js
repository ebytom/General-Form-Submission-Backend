const express = require('express');
const { postForm, getForm, getFormById, deleteEntry } = require('../controllers/form2');
const router = express.Router();

router.post("/postForm", postForm);
router.post("/getForm", getForm);
router.post("/getFormById", getFormById);
router.delete("/deleteEntry", deleteEntry);


module.exports = router;