const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require("./routes/users");
const env = require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/Anmol", {useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true})
.then(() => {console.log('connected to database')})
.catch((error) => {console.log('error occured', error)})

const app = express();

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> {
    console.log(`connected to port ${PORT}`);
});

module.exports = app;