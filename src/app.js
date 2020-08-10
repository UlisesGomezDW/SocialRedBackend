const express = require('express')
const cors = require('cors')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/posts', require('./routes/posts'))
app.use('/categories', require('./routes/category'))

module.exports = app