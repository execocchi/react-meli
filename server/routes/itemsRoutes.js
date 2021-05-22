const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.show);
router.get('/:id', itemsController.detail);

module.exports = router;