const express = require("express");
const morgan = require('morgan')
// const createError = require("http-errors");
const { exist } = require("@hapi/joi");
// require('dotenv').confip()
require('./helpers/init_mongodb')
const router_vschema = require('./router_vschema')
const app = express()
// app.use(morgan('dev'))
// app.use(express.json)

app.get('/',(req,res)=>{
    res.send("hi home page")
})

app.get('/deepak',(req, res, next) => {
    console.log('heeloooo');
    res.send('Hello from express')
})     

// app.use('/auth' , router_vschema)
// app.use( (req, res, next) => {
//     // const error = new error('not found')     
//     // error.status = 404
//     // next(error)
//     next(createError.NotFound("This route doesn't exist"))
// })

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error : ({
            status : err.status || 500,
            message : err.message
        })
    })
})

app.listen(4041 , () => {
    console.log('Server is running');
})

