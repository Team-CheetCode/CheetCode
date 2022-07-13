const express = require('express');
const qController = require('../controllers/qController');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/qotd/:id', qController.qFromDB, qController.getQ, (req, res) => {
  res.status(200).json(res.locals.question);
});

router.post('/userData', userController.postSolution, (req, res) => {
  res.sendStatus(200);
});

router.get('/userData/:id', userController.getSolutions, (req, res) => {
  res.status(200).json(res.locals.solutions);
});

module.exports = router;