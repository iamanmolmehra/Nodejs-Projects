const mongoose = require('mongoose');
const models = require('./models');

mongoose.connect("mongodb://localhost:27017/Anmol", {useFindAndModify: true, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('You are connected to database now');
}).catch((err) => {
    console.log(err, 'Error occured');
});