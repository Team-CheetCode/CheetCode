const { json } = require('express');
const db = require('../models/qModel.js');
const axios = require('axios');
const { queryByPlaceholderText } = require('@storybook/testing-library');


const qController = {};

qController.qFromDB = (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const query = `SELECT question FROM blind75 WHERE _id=${id};`;
  db.query(query)
    .then(data => {
      res.locals.title = data.rows[0].question;
      return next();
    })
    .catch(err => next(err));
};

qController.getQ = async (req, res, next) => {
  const qTitle = res.locals.title;
  const data = JSON.stringify({
    query: `query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
          questionId
          title
          content
          difficulty
          likes
          dislikes
          topicTags {
              name
              slug
              translatedName
              __typename
          }
          codeSnippets {
              lang
              langSlug
              code
              __typename
          }
          hints
          exampleTestcases
          sampleTestCase
      }
  }`,
    variables: {"titleSlug":qTitle}
  });
  
  await axios.post('https://leetcode.com/graphql', data, {
    headers: { 
      'Content-Type': 'application/json', 
    },
  })
  .then(function (response) {
    res.locals.question = response.data.data;
    return next();
  })
  .catch(function (error) {
    console.log('error', error);
  });
};

module.exports = qController;