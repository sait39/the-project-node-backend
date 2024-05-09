const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');

router.get('/static-notes', testController.getStaticNotes);

module.exports = router;
