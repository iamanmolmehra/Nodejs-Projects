const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
// const lowdb = require('lowdb')
// const swaggerUI = require('swagger-ui-express')
// const swaggerJsdoc = require('swagger-jsdoc')
// const booksRouter = require('./routes/books')

// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)
// db.defults({ books: [] }).write()

const options = {
    definitions : {
        openapi : "3.0.0",
        info: {
            title : "Library API",
            version : "1.0.0",
            descriptions: "A simple Express Library API"
        },
        servers : [
            {
                url : "http://localhost:3004"
            }
        ],
        apis: "./"
    }
}

const app = express()
// app.db = db;


// app.get('/', (req, res) => {
//     console.log("check on internet")
//     res.send('Hi from other side')
// });

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// app.use('/books', booksRouter)

app.listen(3004, (req, res) => {
    console.log("I'm am running")
})







