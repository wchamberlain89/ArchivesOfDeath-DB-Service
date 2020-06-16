const express = require('express');
const router = express.Router();
const settlementController = require('../controllers/settlementController');

router.get('/settlements', settlementController.get_all_settlements);

router.post('/settlements', settlementController.create_settlement);

module.exports = router;