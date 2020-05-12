const express = require('express');

const router = express.Router();

const city_controller = require('../controller/city.controller');

router.get('/', city_controller.all);

router.get('/:city', city_controller.filter)

module.exports = router;