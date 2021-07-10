const { string } = require('@hapi/joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const UserSchema = new mongoose.Schema({
    email: {
        type : String,
        required: true,
        unique: [true,"email already exists"]
    },
    password :{
        type : String,
        required : true,
        unique : true
    }
})

const User = mongoose.model("user", UserSchema)
module.exports = User