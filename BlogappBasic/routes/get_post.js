const knex = require('../models/database');
const { login } = require('./login')
const jwt = require('jsonwebtoken')

exports.get_post = async (req, res,next) => {
    console.log(req.headers.cookie)
    const authHeader = req.headers.cookie
    const token = authHeader.split('=')[1]
    console.log(token)
    if (token == null) { return res.sendStatus(401).send('unAuthorized') }
    else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) { return res.sendStatus(403).send('unAuthorized') }
            res.user = user
            res.send(user)
            const a = knex('create_post').select('*').from('create_post').where(
                'title', req.body.title
            ).then((a) => {
                    console.log("showing data");
                    console.log(a);
                    res.send(a)
                }).catch((err) => {
                    console.log(err);
                })
            next()
        })

    }
}
