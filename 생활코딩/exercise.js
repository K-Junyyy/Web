var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req,res){
    var url = req.url;

    if(req.url == '/'){
        url = '/index.html';
    }
    if(req.url == 'favicon.ico')
    {
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200);
    res.end(fs.readFileSync(__dirname+url));
});

app.listen(3000,function(){
    console.log("server is running...")
});