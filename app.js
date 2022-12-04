require('dotenv').config()
const express = require('express')
const cors = require('cors')
var path = require('path');
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/1.0', require('./app/routes'))

app.listen(PORT, () => {
    console.log(`Tu API es http://localhost:${PORT}/api/1.0`)
})