const express = require('express')
const mongoose = require('mongoose');
const db = require('../database/db');
const facelift = require('../database/models');

exports.signup = (req, res) => {
    facelift.insertMany({
        name : req.body.name, email : req.body.email, password : req.body.password
    }).then(() => {
        console.log("Dropped data to database");
        facelift.find({
            email: req.body.email
        }).then((data) => {
            console.log(data, "Data is here");
            if ( data[0].email == req.body.email) {
                console.log('Email is already present!')
                res.send('Email is already present!')
            } else {
                console.log('You successfully signed up!');
                res.send('You successfully signed up!');
            }
        }).catch ((err)=> {
            console.log(err);
        });
    }).catch ((err)=> {
        console.log(err);
    });
};

