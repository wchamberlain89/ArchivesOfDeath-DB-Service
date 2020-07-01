const express = require('express');
const router = express.Router();
const settlementController = require('../controllers/survivorsController');

router.get('/', settlementController.get_all_survivors);

module.exports = router;