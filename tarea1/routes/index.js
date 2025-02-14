const express = require('express');
const router = express.Router();
const controller = require('./../controllers/controller');

router.get('/sources', controller.getSources);
router.get('/top-headlines', controller.getTopHeadlines);
router.get('/everything', controller.getEverything);

module.exports = router;