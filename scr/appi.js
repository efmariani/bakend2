const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json())

app.use(require('./routes/products'))
app.listen(PORT,()=> console.log('escuchando en el puerto',PORT))




