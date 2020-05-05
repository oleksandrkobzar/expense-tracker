const express = require('express')
const dotenv = require('dotenv')

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config({ path: './.env' })

app.get('/', (req, res) => res.send('...'))

app.listen(PORT, console.log(`Server running in 
    ${process.env.NODE_ENV} mode on port ${PORT}`))