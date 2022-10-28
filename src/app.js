const express = require('express')
const path = require('path')
const app     = express()
const PORT    = 3000
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/vistas',express.static('public/views'))
app.use(require('./routes/rutas'))











app.listen(PORT, () => console.log('escuchando puerto', PORT))




