const express = require('express')
const app = express()

require('dotenv').config({ path: './config/.env' })
require('./config/db')

const login = require('./routes/login')
const signup = require('./routes/signup')

app.use(express.json())
app.use('/login', login)
app.use('/signup', signup)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in 
    ${process.env.NODE_ENV} mode on port ${PORT}`))