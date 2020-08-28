const express = require('express');
const app = express();
const port = process.env.FRT_PORT;

app.get('/', (req, res) => {
  res.send('frontend');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});