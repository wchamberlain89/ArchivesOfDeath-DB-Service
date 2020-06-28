const express = require('express');
const router = express.Router();
const assetsController = require('../controllers/assetsController');

router.get('/resources', assetsController.get_all_resources);

router.get('/gear', assetsController.get_all_gear);

module.exports = router;