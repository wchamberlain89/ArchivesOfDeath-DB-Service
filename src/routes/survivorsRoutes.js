const express = require('express');
const router = express.Router({ mergeParams: true });
const survivorsController = require('../controllers/survivorsController');

router.get('/', survivorsController.get_all_survivors);

router.post('/', survivorsController.create_survivor);

module.exports = router;