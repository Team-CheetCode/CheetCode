const express = require('express');
const qController = require('../controllers/qController');
const router = express.Router();

router.get('/qotd', qController.qFromDB, qController.getQ, (req, res) => {
  res.status(200).json(res.locals.question);
});

module.exports = router;