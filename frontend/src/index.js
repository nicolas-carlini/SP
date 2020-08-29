const express = require('express');
const app = express();
const port = process.env.FRT_PORT;
const axios = require('axios');

app.get('/', (req, res) => {
  axios.get('http://192.168.1.2:81')
  .then(function (response) {
    
    res.send(`${process.env.NAME}! ${response.data.ms}`);

  })
  .catch(function (error) {
    // handle error
    res.send(`${process.env.NAME}! ${error}`);
    
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});