const express = require('express');
const router = express.Router();
const settlementController = require('../controllers/settlementController');

router.get('/', settlementController.get_all_settlements);

router.post('/', settlementController.create_settlement);

//Settlement Resources Routes

router.get('/:settlementId/resources/', settlementController.get_settlement_resources);

router.post('/:settlementId/resources/:resourceId', settlementController.add_settlement_resource);

router.put('/:settlementId/resources/:resourceId', settlementController.update_settlement_resource);

//Settlement Gear Routes

router.get('/:settlementId/gear/', settlementController.get_settlement_gear);

router.post('/:settlementId/gear/:gearId', settlementController.add_settlement_gear);

router.put('/:settlementId/gear/:gearId', settlementController.update_settlement_gear);

module.exports = router;