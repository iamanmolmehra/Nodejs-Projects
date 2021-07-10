const knex = require('../models/database')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
        const logy = await knex.select("*").from("signbase").where(
            'email', req.body.email
        ).then((logy) => {
            console.log('success');      
            console.log(logy);
            // res.send(logy)
            if ('email' == undefined || 'password' == undefined) {
                console.log("email incorrect, or please check your password");
                res.send("email incorrect, or please check your password");
            } else {
                if (logy[0].password == req.body.password) {
                    let user = {name: req.body.name , email : req.body.email }
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                    res.cookie('vishu', accessToken, {
                        expires : new Date(Date.now() + 300000),
                        httpOnly: true
                    })   
                    res.json({accessToken : accessToken})
                    const authHeader = req.headers.cookie
                    const token = authHeader.split('=')[1]
                    const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
                    console.log('You successfully logged in :)');
                    res.send('You successfully logged in :)');
                } else {
                    console.log("Your password isn't correct, please check!");
                }
            }
        }).catch ((err)=> {
            console.log(err);
        })
}

