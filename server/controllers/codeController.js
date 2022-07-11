const db = require('../models/codeModels');
const codeModel = {};

const codeDescription = 'SELECT'
const codeSolution = 'SELECT'

codeController.getCodeDescription = (req, res, next) => {
    db.query(codeDescription = 'SELECT', (err, res) => {
      if (err) {
        console.log(err);
      } else {
       
      }});
    
    db
      .query(codeDescription)
      .then(data => {
        
        res.locals.codeDescription = data.rows;
        
        next();
      });
  };


  codeController.getCodeSolution = (req, res, next) => {
    // callback
    const id = req.query.id;
    const query = `SELECT * FROM  = ${id}`;
     
    db.query(query)
      .then(data => {
        res.locals.codeSolution = data.rows[0];
        next();
      });
  };