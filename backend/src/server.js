const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://anthony:anthony@cluster0-fcdd2.mongodb.net/banco?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())

app.use(routes);

app.listen(3000)