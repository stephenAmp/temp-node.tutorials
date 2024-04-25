// Creating http server
const http = require("http");
const url = require('url')

const server = http.createServer((req,res)=>{
if(req.url === "/"){
    res.end("Welcome to our homepage")
}
if( req.url === "/about"){
    res.end("Here is our short history")
}

res.end(`
<h1>Oops!</h1>
<p>Page not found</p>
<a href="/">Back home</a>
`)
})
server.listen(5000)

