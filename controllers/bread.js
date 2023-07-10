const router = require('express').Router()
const Bread = require('../models/bread')

router.get('/', (req,res) => {
    res.render('index', {breads: Bread})
})

//gets a specific bread based on the index of the breads array
router.get('/:index', (req,res) => {
    const {index} = req.params
    res.render('show',{bread:Bread[index]})
})

module.exports = router