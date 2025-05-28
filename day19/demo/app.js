const express = require('express')
const app = express()
const task = require('./task')

app.get("/", (req,res) =>{
    res.send("api testing")
})

app.get("/task", (req,res)=>{
    res.json(task)
})

app.listen(3002,() => {
    console.log("welcome to api")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myCat');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



