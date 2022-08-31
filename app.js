const express = require('express');
const birds = require('./birds/birds');
const cards  = require('./cardservice');

var app = express();

app.get('/', function(req,res){
    res.send('Hello from Node');
});

app.use('/birds',birds);
app.use('/deck',cards);

app.listen(8080, function(){
    console.log('Listening on port 8080');
})