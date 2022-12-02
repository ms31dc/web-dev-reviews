const http= require('http');
const fs= require('fs');
const path = require('path');

const server   =http.createServer((req,res) => {
console.log(req.url)

if(req.url === '/'){

    fs.readFile( path.join(__dirname,'public','index.html'),(err,data)=>{
    if (err) throw err;

    res.writeHead(200,{ 'Content-Type' : 'text/html'});
    res.end(data);
    })
   
}
else if(req.url=='/api')
{

    fs.readFile( path.join(__dirname,'public','db.json'),(err,data)=>{
        if (err) throw err;
    
        res.writeHead(200,{ 'Content-Type' : 'application/json'});
        res.end(data);
        })
       /*
            some where here we need to get data from mongo db
       */


}
else{

    res.end("<h1>Eror 404 Page not found</h1>")
}

});

const PORT = process.env.PORT || 5959;

server.listen(PORT,() => console.log(`yay the server is running finally ${PORT}`));

