const knex = require('../models/database')

exports.del = async (req,res) => {
    const d = await knex.select('title').from('create_post').where({title:req.body.title})
  .del().then (() => {
        console.log("Active to delete the Post");
        res.send("Active to delete the Post")
    }).catch ((err)=> {
        console.log(err);
    })
}
