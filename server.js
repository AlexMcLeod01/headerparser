var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for']||
    req.connection.remoteAddress;
    var language = req.headers['accept-language'].split(',')[0];
    var os = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    
    res.send({"ipaddress": ip, "language": language, "software": os});
    res.end();
});

app.listen(port, function() {
    console.log("listening on port " + port);
});
