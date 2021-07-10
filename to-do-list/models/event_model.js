const mongoose = require('mongoose');
const db = require('../databases/db');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,  
        trim: true,
        min: 3,
        max:  [50, "The name should be smaller than fifty letters"]
    },
    description: {
        type: String,
        required: true,
    },
    userId:{
        type:String
    },
    city: {     
        type: String,
        required: true,
        max:  [50, "The name should be smaller than fifty letters"]
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    }
});

exports.module = new mongoose.model('event', eventSchema)