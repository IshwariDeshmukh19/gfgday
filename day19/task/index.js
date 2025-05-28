const express = require('express')
const app = express()
const actor = require('./actor')

app.get("/", (req,res) =>{
    res.send("welcome to actors list....")
})



app.get("/actor", (req,res)=>{
    res.json(actor)
})

app.listen(5001,() => {
    console.log("api started")
})