const express = require('express')
const app = express()
const fs = require('fs')

let file = __filename;
let hdrs = {'X-Custom-Header': 'alert("you have been hacked")'};

app.head('/', (req,res) => {
    res.sendFile(file, { headers: hdrs }); // maybe something here
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8000, () => {
    console.log("started")
})
