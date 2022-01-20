const express = require('express')
const recipeRouter = require("./router")

const server = express()

server.use(express.json())
server.use('/api/', recipeRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message,
        stack: err.stack
    })
})

module.exports = server