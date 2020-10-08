var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "This is directly from my Node server" }));
});
app.listen(3000);
