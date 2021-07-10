require('dotenv').config();

module.exports = {
    development : {
            client: 'mysql',
            connection: {
              host : '127.0.0.1',
              user : "mysql",
              password : 'Anmol@123',
              database : rocess.env.DB_NAME
            },
            pool: {   
                min: 2,
                max: 10
              },
              migrations: {
                directory:'migrations'
              }
            },
            production: {
              client: 'pg',
              // connection: {
              //   database: process.env.database,
              //   user:     process.env.user,
              //   password: process.env.password
              // }
              connection: process.env.DATABASE_URL+"?ssl=true",
              pool: {
                min: 2,
                max: 10
              },
              migrations: {
                tableName:"knex_migrations",
                directory: './migrations'
              }
          
            }
        }

