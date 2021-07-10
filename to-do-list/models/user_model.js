const mongoose = require('mongoose');
const db = require('../databases/db');

const userSchema =  new mongoose.Schema({
    name : {
        type : String,
        require : true,
        min : null,
        max : [50, "The name should be smaller than fifty letters"]
    },
    email : {
        type : String,
        unique : true,
        require : true,
        min : 10,
        max : [40, "The email should be smaller than forty letters"]
    },
    password : {
        type : String,
        require : true,
        min : [8, "The password should be greater than 8 letters"],
        max : [30, "The password should be smaller than thirty letters"]
    },
    number : {
        type : Number,
        require : true,
        min : [6, "The password should be greater than 8 letters"],
        max : [18, "The password should be smaller than thirty letters"]
    }
    // role : {
    //     type: 'string',
    //     enum : ["user", "admin"],
    //     default : "user"
    // }
})

const todo = new mongoose.model('userevent', userSchema)

exports.signup = async (req, res) => {
    const coll = await topo.insertMany({
        name : req.body.name, email : req.body.email, password : req.body.password
    }).then(() => {
        console.log("You Signed up Successfully");
    }).catch((err) => {
        console.log(err)
    })
}
