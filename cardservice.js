const express = require('express');
const router = express.Router();
const request = require('postman-request');

const options = {
    url: 'https://api.clashroyale.com/v1/cards',
    headers: {
      'Authorization': 'Bearer xxxxxxx'
    }
  };
  
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      console.log(info.items[0].name + " Stars");
      console.log(info.items[1].name + " Forks");
    }
  }
  
  

  router.get('/cards',(req,res) => {
    let data  = request(options, callback);
    console.log(request(options, callback));
    res.send(data);
});

module.exports = router;
