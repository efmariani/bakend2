const express = require('express')
const router=express.Router()

router.get('/', (req, res) => {
    res.render('../src/views/index')
})

router.get('/cart', (req, res) => {
    res.render('../src/views/cart')
})

router.get('/detail-products', (req, res) => {
    res.render('../src/views/detailproducts')
})
router.get('/login', (req, res) => {
    res.render('../src/views/login')
})
router.get('/register', (req, res) => {
    res.render('../src/views/register')
})


module.exports = router

