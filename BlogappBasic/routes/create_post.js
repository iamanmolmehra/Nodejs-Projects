const knex = require('../models/database');

exports.create_post = (req, res) => {
    knex('create_post').insert({
        title : req.body.title, description : req.body.description
    }).then(() => {
        console.log("Data is coming");
        knex.select('*').from('create_post').where(
            'title' ,  req.body.title
            ).then(() => {
                if ('title' == req.body.title) {
                    console.log("The title already exists");
                    res.send("The title already exists");
                } else {
                    console.log('You successfully created your post');
                    res.send('You successfully created your post');
                }
            }).catch ((err)=> {
                console.log(err);
            })
    }).catch ((err)=> {
        console.log(err);
    })
}