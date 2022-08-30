const express = require('express');
const birds = require('./birds/birds');

var app = express();

app.get('/', function(req,res){
    res.send('Hello from Node');
});

app.use('/birds',birds);

app.listen(8080, function(){
    console.log('Listening on port 8080');
})