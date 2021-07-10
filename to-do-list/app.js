const express = require('express');
require('dotenv').config()
const router = express.Router();
const {signup} = require("./models/user_model");
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('siddik')
})

app.post('/', signup)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app now listening for requests on port ${PORT}`);
});

  
