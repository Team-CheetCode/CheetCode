const { json } = require('express');
const db = require('../models/qModel.js');
const axios = require('axios');

const userController = {};

userController.postSolution = (req, res, next) => {
  const { id, solution } = req.body;
  const query = `INSERT INTO usersolutions (_id, solution) values ($1, $2);`;
  const values = [id, solution]
  console.log('id, solution', id, solution);
  db.query(query, values)
    .then(data => {
      console.log(data)
      return next();
    })
    .catch(err => {
      return next(err)
    })
};

module.exports = userController;