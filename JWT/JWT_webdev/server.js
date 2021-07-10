const express = require('express');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser')
require("dotenv").config()
const app = express();
app.use(express.json());

const posts = [
    { username : "Abhishek", title : "Post 1" },
    { username : "Maan Singh", title : "Post 2" }   
]

// app.get('/posts',(req, res) => {
//     res.json(posts.filter(post => post.username === req.body.name))
// })   

app.get('/login', (req, res) => {
    const username = req.body.username
    const title = req.body.title   
    // const expire = req.body.expires
    let user = { "name": username, "title": title}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    console.log(accessToken, "token");
    res.cookie("key", accessToken, {
        expires : new Date(Date.now() + 600000), 
        httpOnly: true,    
        // secure: true     
    })
    res.json({ accessToken : accessToken })
    const veirfyToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    console.log(veirfyToken);
})
        
// function authenticateToken(req, res, next) {
//     console.log(req.body, "hey data");
//     const authHeader = req.body
//     console.log(authHeader, "authHeader");
//     const token = authHeader && authHeader.split(' ')
//     console.log(token);
    // if (token == null) return res.sendStatus(401)

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //     if (err) return res.sendStatus(403)
    //     req.user = user
    //     next()
    // })
// }

app.listen(3007, () => {
    console.log('Heya! I am working!');
})




