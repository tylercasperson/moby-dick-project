const express = require('express');
const router = express.Router();
const { parseFile, parseStopWords } = require('../controllers/parserController.js');

router.route('/').post(parseFile);
router.route('/parseStopWords').post(parseStopWords);

module.exports = router;
