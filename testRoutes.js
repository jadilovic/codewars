const express = require('express');
const router = express.Router();
const { testController } = require('./controllers');

router.get('/test', testController);

module.exports = router;
