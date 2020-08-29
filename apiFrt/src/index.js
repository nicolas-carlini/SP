const express = require('express');
const app = express();
const port = process.env.APIFRT_PORT;

app.get('/', (req, res) => {
  res.send(`${process.env.NAME}!`);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});