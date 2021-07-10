const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const cookie = require('cookie-parser');
const User = require('../services/users');
const Service = new User();

router.get('/', (req, res) => {
    try {
        res.send({msg : "index is working!"})
    } catch (err){
        console.log(err);
    }
})  

router.post('/signup', async(req, res) => {
    try {
        await Service.insert(req.body)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            console.log(err);
        })
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const body = req.body;
        await Service.login(body)
        .then((d) => {
            if (d != false) {
                if (d != true) {
                    res.cookie('user_token', d)
                    res.send({message : "You have loged in successfully!"})
                } else {
                    res.send({message : "Please enter a correct password!"})
                } 
            } else {
                res.send({message : "Please sign-up first!"})
            }
        })
        .catch( (err) => {        
            res.send({err : err})
        })
    } 
    catch (err) {
        res.send(error);
        console.log(error);
    }
});

module.exports = router;    









const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const cookie = require('cookie-parser');
const User = require('../services/users');
const Service = new User();


 