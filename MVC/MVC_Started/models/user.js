const mongoose  = require('mongoose')  

var userSchema = new mongoose.Schema({
    firtname : String,
    lastname : String,
    city     : String,
    state    : String,
    country  : String
});

const userModel = model.exports = mongoose.model("users", userSchema);

module.exports.getUser=(cb)=>{  
    userModel.find((err,data)=>{  
        if(err){  
            console.log(err)  
        }  
        else{  
            cb(null,data)  
        }  
    })  
}  
  
module.exports.addUser=(newUser,cb)=>{  
    const user = new userModel({  
        firstname:newUser.firstname,  
        lastname:newUser.lastname,  
        city:newUser.city,  
        state:newUser.state,  
        country:newUser.country   
    })  
    user.save(cb)  
}  