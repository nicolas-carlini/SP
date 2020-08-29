const express = require('express');
const app = express();
const port = process.env.APIDB_PORT;
const Test = require("./models/test");
var faker = require('faker');
require("./database");

app.get('/', async (req, res) => {

  //peticiones
  let test = new Test();
  
  test.name = faker.name.findName();
  test.lastName = faker.name.lastName();
  test.email = faker.internet.email();
  test.isValidEmail = true;
  test.password = faker.internet.password();
  test.phone = faker.phone.phoneNumber();
  test.ip = faker.internet.ip();
  
  await test.save();
  
  res.json(test);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});