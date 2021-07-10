const knex = require('../models/database')

exports.edit = async (req,res) => {
    const d = await knex.select('*').from('create_post').where('title', req.body.title).limit(1)
    .update('title', req.body.change).then (() => {
        console.log("Active to delete the edit");
        res.send("Active to delete the edit")
    }).catch ((err)=> {
        console.log(err);
    })
}


