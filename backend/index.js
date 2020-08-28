const express = require('express');
const app = express();
const port = process.env.BKT_PORT;

app.get('/', (req, res) => {
  res.send('backend!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});