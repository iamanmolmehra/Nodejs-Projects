const jwt = require('jsonwebtoken');
const User = require('../models/users')
const cookie = require('cookie');

module.exports = async (req, res, next) => {
    try {
        var authheader = req.cookie.user_token || req.body.token || req.headers.cookie;
            // var token = authheader && authheader.split(' ')[0];
            // if (authheader == undifined) {
            //     res.send('error', )
            // }
        console.log(authheader);
    } catch (error) {   
        console.log(err, "This is token error, please go through once again.");
        req.Error = error.message
        next()
    }
    
}          