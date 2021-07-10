const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Anmol", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true})
.then(()=> {
    console.log('connection successful');
}).catch ((err) => {
    console.log(err);
})