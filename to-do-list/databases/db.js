const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Anmol", {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
.then(() => {
    console.log('Connected to databases');
}).catch((err) => {
    console.log(err, "error occured");
})