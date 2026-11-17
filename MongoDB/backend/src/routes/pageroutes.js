//Gestione del routing
const express = require('express');
const router = express.Router();
const path = require('path');
const paths = require('../../config/path');

router.get('/', (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, 'index.html'));
});

module.exports = router;