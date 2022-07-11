const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());


if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
})