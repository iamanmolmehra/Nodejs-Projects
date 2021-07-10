const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require("./routes/users");
const env = require('dotenv').config()

mongoose.connect("mongodb://127.0.0.1:27017/Anmol", {useNewURlparser:true, useUnifiedTopology:true, useFindAndModify:true, use})
.then(()=>console.log("connected to database")).catch(error=>console.log('error occured', error))

var app = express();

app.set("views", path.resolve(__dirname, "views"))
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}))

app.use("/user/", userRoutes)

var PORT = process.env.port || 3000;  
  
//showing the port on which server is running  
app.listen(PORT,()=>{
    console.log(`server running at port ${port}`)
})
  
module.exports = app;









