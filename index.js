const express = require('express')
const app = express()
const fs = require('fs')

//app.disable('x-powered-by');
//app.set('x-powered-by', 'hello-world');

// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


app.head('/', (req,res) => {
    console.log('Head request received', uuidv4())
    res.set('Content-Type', 'hello world')
    res.setHeader('X-Powered-By', 'Rainbows')
    
    //https://stackoverflow.com/questions/31738712/nodejs-express-read-file-and-return-response-asynchronously
    //fs.readFile("/Users/guillaumefe/Head-hack-inetum/index.html", "utf8", function(err, data){
    //    if(err) throw err;
    //    res.set('Content-Type', 'text/html')
    //    res.send(data);
    //});

    //res.redirect('http://localhost:8000/payload')
})

//app.get('/payload', (req, res) => {
//    console.log('Get request received', uuidv4())
//    res.send('got it')
//})

app.listen(8000, () => {
    console.log("started")
})
