const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config({ path: './config/.env' })
require('./config/db')

const login = require('./routes/login')
const signup = require('./routes/signup')
const category = require('./routes/category')
const transaction = require('./routes/transaction')

app.use(cors())

if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

app.use(express.json())
app.use('/login', login)
app.use('/signup', signup)
app.use('/category', category)
app.use('/transaction', transaction)

const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))