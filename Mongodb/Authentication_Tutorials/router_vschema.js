const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require('./User.model')
const {authSchema} = require('./validation_schema')

router.get('/register', async (req, res, next) => {
    console.log(req.body)
    try {
        // const { email, password } = req.body
        // if (!email || ! password ) throw createError.BadRequest()
    
        const result = await authSchema.validationsync(req).body
        console.log(result);
        
        const doesExist = await User.findOne({email: result.email})
        if (doesExist) 
        throw createError.Conflict('${result.email} is alrredy been registered')
        
        const user = new User({result})
        const savedUser = await user.save()
        res.send(savedUser)
    } catch {
        if (error.isJoi === true) error.status = 422
            next(error)
        }
})

router.get('/login', async (req, res, next) => {
    res.send('login route')
})

router.post('/refresh-token', async (req, res, next) => {
    res.send('resgister router')
})

router.delete('/logout', async (req, res, next) => {
    res.send('logout route')
})

module.exports = router 








