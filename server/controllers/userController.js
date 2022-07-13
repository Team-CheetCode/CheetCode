const { json } = require('express');
const db = require('../models/qModel.js');
const axios = require('axios');

const userController = {};

userController.postSolution = (req, res, next) => {
  const { id, name, solution } = req.body;
  const query = `INSERT INTO usersolutions (_id, name, solution, upvotes) values ($1, $2, $3, $4);`;
  const values = [id, name, solution, 0]
  console.log('id, name, solution', id, name, solution);
  db.query(query, values)
    .then(data => {
      return next();
    })
    .catch(err => {
      return next(err)
    })
};

userController.getSolutions = (req, res, next) => {
  const { id } = req.params;
  console.log('question id in get request: ', id)
  const query = `SELECT name, solution FROM usersolutions WHERE _id=${id};`;
  db.query(query)
    .then(data => {
      res.locals.solutions = data.rows;
      return next();
    }).catch(err => {
      return next(err);
    });
};

module.exports = userController;