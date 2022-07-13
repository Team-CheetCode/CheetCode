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
  const query = `SELECT qid, name, solution, upvotes FROM usersolutions WHERE _id=${id} ORDER BY upvotes DESC;`;
  db.query(query)
    .then(data => {
      res.locals.solutions = data.rows;
      return next();
    }).catch(err => {
      return next(err);
    });
};

userController.updateSolutions = (req, res, next) => {
  const { qid, upvotes } = req.body;
  const query = `UPDATE usersolutions SET upvotes=${upvotes} WHERE qid=${qid};`;
  db.query(query)
    .then(data => {
      console.log(data)
      return next()
    })
    .catch(err => next(err));
};

module.exports = userController;