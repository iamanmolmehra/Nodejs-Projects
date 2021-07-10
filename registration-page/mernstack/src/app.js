const express = require('express');
const path = require('path')
require('dotenv').config();
require('./db/conn')
const app = express();
const hbs = require('hbs')
const register = require('./models/register')

// const static_path = path.join(__dirname, "../templates/public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended: false}))
// app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)
        
app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.render("register");
})

app.post('/register', async (req, res) => {
    try {
        console.log(req.body.Name);
        res.send(req.body.Name);
    } catch (error) {
        res.send(400).send(error)
    }
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

     
