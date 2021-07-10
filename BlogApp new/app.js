const express = require("express");
const mongoose = require('mongoose');
// const cookiePaser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const cookieParser = require("cookie-parser");

const app = express();
// app.use(cookieParser());        
// app.use(express.json);   


    
app.get('/', (req, res) => {
    res.send("Hello from the other side")
});
       
const PORT = process.env.PORT || 3010
app.listen(PORT, () => { console.log('Hello guys!'); });

