const http = require('http')

const server = http.createServer((req,res) =>{
res.end("hello GFG MERN")
})
server.listen(5004, () => {
    console.log("server is ready !!!")
})
console.log(server)