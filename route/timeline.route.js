const express = require('express');

const router = express.Router();

const timeline_controller = require('../controller/timeline.controller');

router.get('/', timeline_controller.all);

router.get('/:city', timeline_controller.filter)

module.exports = router;