const env = require('dotenv').config()
console.log("I am env");

const knex = require('knex')({
    client : "mysql",
    connection : {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        database : process.env.DB_NAME,
        password : process.env.DB_PASS
    }
})

// knex.schema.createTable('signbase', (table) => {
//     table.increments('id').primary()    
//     table.string('name')
//     table.string('email')
//     table.string('password')
// }).then(() => {
//     console.log('signbase table created successfully');
// }).catch ((err) => {
//     console.log(err);
// })

// knex.schema.createTable('logbase', (table) => {
//     table.increments('id').primary()
//     table.string('email')
//     table.string('password')
// }).then(() => {
//     console.log('logbase table created successfully');
// }).catch((err) => {
//     console.log(err);
// })

// knex.schema.createTable('create_post', (table) => {
//     table.increments('id').primary()
//     table.string('title')
//     table.string('description')
// }).then (() => {
//     console.log("table created for created post");
// }).catch((err) => {
//     console.log(err);
// })

module.exports = knex