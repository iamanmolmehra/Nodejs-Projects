const mongoose = require('mongoose');
const db = require('../database/db');

const faceSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
        maxlength : [50, "The name should be smaller than fifty letters"]
    },
    email : {
        type : String,
        require : true,
        maxlength : [40, "The email should be smaller than forty letters"]
    },
    password : {
        type : String,
        require : true,
        minletter : [8, "The password should be greater than 8 letters"],
        maxlength : [30, "The password should be smaller than thirty letters"]
    }
})

const facelift = new mongoose.model("facebook", faceSchema) 

module.exports = facelift