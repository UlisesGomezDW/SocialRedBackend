const http = require('http')
const app = require('./app')
require('dotenv').config()
require('./database')

const server = http.createServer(app)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 5000

server.listen(port, host, () => {
    console.log(`App running in port ${port}`)
})
