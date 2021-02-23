const express = require('express');
const router = express.Router({ mergeParams: true });
const survivorsController = require('../controllers/survivorsController');
const { Router } = require('express');

router.get('/', survivorsController.get_all_survivors);

router.post('/', survivorsController.create_survivor);

router.get('/:survivorId', survivorsController.get_survivor);

router.post('/:survivorId/fightingArts', survivorsController.create_survivor_fighting_art);

module.exports = router;