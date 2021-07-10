const express = require('express');
const jwt = require('jsonwebtoken')
const {signup} = require('./routes/signup')
const {login} = require('./routes/login')
const {create_post} = require('./routes/create_post')
const {get_post} = require('./routes/get_post')
const {del} = require('./routes/del_post')
const {edit} = require('./routes/update')
require('dotenv').config();

const app = express();
app.use(express.json());

// const accesstoken = jwt.sign()

app.post('/signup', signup)
app.post('/login', login)
app.post('/createpost', create_post)
app.get('/getpost', get_post)
app.delete('/delpost', del)
app.put('/edit', edit)

const PORT = process.env.PORT     
app.listen(PORT, () => {
    console.log(`Your are now connected with the PORT ${PORT}`);
});