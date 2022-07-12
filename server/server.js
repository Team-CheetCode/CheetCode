const express = require('express');
const apiRouter = require('./routes/api.js');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });

app.use(cors())

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('/api/', apiRouter);


app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
})