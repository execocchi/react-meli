const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/:id', categoriesController.category);

module.exports= router;