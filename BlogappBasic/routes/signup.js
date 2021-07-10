const knex = require('../models/database')

exports.signup = (req, res) => {
    knex('signbase').insert({
        name : req.body.name,   
    })
    .then( ()=> {
        console.log('success')
        knex.select("*").from('signbase').where(
            'email', req.body.email
        ).then (()=> {
            if ( "email" == req.body.email) {
                console.log('Email is already present!')
                res.send('Email is already present!')
            } else {
                console.log('You successfully signed up!');
                res.send('You successfully signed up!');
            }
        }).catch ((err)=> {
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err)
    })
}

