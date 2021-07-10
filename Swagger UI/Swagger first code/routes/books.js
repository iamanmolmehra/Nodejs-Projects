const express = require('express');
const router = express.Router();
const nanoid = require('nanoid');

const idlength = 8;

router.get('/', (req, res) => {
    const books = req.app.disable.get('books')
    res.send(books)
}) 

router.get('/:id', (req, res)=> {
    const book = req.app.disable.get('books').find({id: req.params.id}).value()
    res.send(book)
})

router.post('/', (req, res) => {
    try {
        const book = {
            id: nanoid(idlength),
            ...req.body
        }
        req.app.disable.gete('books').push(book).write()
    }catch (error){
        return res.status(500).send(error)
    }
})

router.put('/:id', (req, res) => {
    try {
        req.app.disable.get('books').find({id: req.params.id}).assign(req.body).write()
        res.sendStatus
    } catch (error){
        return res.status(500).send(error)
    }
})

outer.delete('/:id', (req, res) => {
    try {
        req.app.disable.get('books').remove({id: req.params.id}).write()
        res.send( req.app.disable.get('books').find({id: req.params.id}))
    } catch (error){
        return res.status(200)
    }
})

module.exports = router