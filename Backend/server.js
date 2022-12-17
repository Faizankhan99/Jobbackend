const express = require('express')
const { mongoose } = require('mongoose')
const cors = require("cors")
const Job=require("./Routing/Routing")
require("dotenv").config()
const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())
app.get('/', (req, res) => res.send('hello'))

app.use("/job", Job)

app.listen(8080, async () => {
    await mongoose.connect("mongodb+srv://faizan:faizan@cluster0.hnanw0r.mongodb.net/Users")
    console.log('server started on port 8080')
})