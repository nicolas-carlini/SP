const mongoose = require('mongoose');
const msPorts = require('./config/ipservices')

const uri =
  `mongodb://${msPorts.backend.mongo}/core`;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>{
    console.log('DataBase is connected')
})