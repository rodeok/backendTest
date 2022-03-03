const express = require('express')

const app = express()

const mongoose = require('mongoose')

// connect to mongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })
db.on('error', console.error.bind(console, 'connection error:'))
const PORT = process.env.PORT || 6060


app.use(express.json())












app.listen()