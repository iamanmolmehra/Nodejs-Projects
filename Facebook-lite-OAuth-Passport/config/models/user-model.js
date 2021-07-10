const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    facebookId: String,
    // thumbnail: String
});

// const User = mongoose.model('facebook', userSchema);

// module.exports = User;