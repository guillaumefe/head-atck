const express = require('express')
const app = express()
const fs = require('fs')

// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

let file = __filename;
let hdrs = {'X-Custom-Header': 'there is an opportunity'};

app.head('/', (req,res) => {
    console.log('Head request received', uuidv4())
    res.sendFile(file, { headers: hdrs, lastModified: false, etag: false });
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8000, () => {
    console.log("started")
})
