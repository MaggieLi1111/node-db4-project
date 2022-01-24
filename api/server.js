const express = require('express')
const recipesRouter = require("./recipes/router")

const server = express()

server.use(express.json())
server.use("/api/recipes", recipesRouter)


server.use("*", (req, res) => {
    res.json({ api: "up" })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        status: 500,
        message: err.message,
        stack: err.stack
    })
})

module.exports = server