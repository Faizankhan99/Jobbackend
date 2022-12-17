const express = require('express');
const Job = require("../model/Job.model")
const app = express.Router()

app.get("/", async(req, res) => {
    const data=await Job.find({})
    res.send(data)
})

app.post("/", async(req, res) => {
    const { company, postedAt, city,role,level,contract,position,language } = req.body;
    try {
        let data = await Job.create({company, postedAt, city,role,level,contract,position,language })
        res.send(data)
    } catch (err) {
        console.log(err)
    }
})





module.exports=app
