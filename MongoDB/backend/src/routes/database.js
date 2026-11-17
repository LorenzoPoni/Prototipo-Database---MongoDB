const express = require('express');
const router = express.Router();
const { databaseController } = require('../controllers/databaseController');

router.post('/', databaseController);

module.exports = router;