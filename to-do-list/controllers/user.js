

exports.hello = async (req, res) => {
    try {
        console.log({ message: "hello" });
        return res.json({ message: "hello" })
    } catch (er) {
        console.log(er);
    }
}

exports.signup = async (req, res) => {
    try {
        console.log(req.body)
        res.send('ghjkl;')
        // const s = await todo.insertMany({
        //     name : req.body.name, email : req.body.email, password : req.body.password, number : req.body.number, role : req.body.role
        // }).then(() => {
        //     console.log("Dropped data to database",s);
        //     }).catch((err)  => {
        //         console.log(err)
            // })
        // const { name, email, password, number, role} = req.body
        // const userData = user_model({ name, email, password, number, role })    
        // userData.password = await bcrpyt.hash( userData.password, 10)
        // console.log(userData.password);
        // userData.save( (err) => {
        //     if (err) {
        //         console.log(err);    
        //     } else {
        //         console.log('You have successfully signed up')
        //         res.status(200).json({message : "You are succesfully signed up", signupError : false})
        //     }
        // })
    } catch (err){
        console.log(err);
    }
}