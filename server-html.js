const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 4000

const myLogger = function (req, res, next) {
  console.log('logger:', req.originalUrl)
  next()
}

app.use(myLogger)

app.use(express.static('public-html'))

app.listen(port, () => {
  console.log(`html normal listening on port ${port}`)
})