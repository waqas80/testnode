const express = require('express');
const router = express.Router();
const request = require('postman-request');

const options = {
    url: 'https://api.clashroyale.com/v1/cards',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVkNmY3YzAxLTY2MWItNDhhNi05ZDBkLTA1YzI2YTMyYjFiNCIsImlhdCI6MTY2MTk2MDQ5OCwic3ViIjoiZGV2ZWxvcGVyLzk0MjVhOTBjLWI4NmYtM2RkOS03YmYzLWU4ZWE3ZjFjNGY2MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1Mi44Ny45MS44OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Keayn-g0cYWLjyWysBVNuy1WtJm7X5FHgYzJUHJpfO121qeolSwY6eI4N-SBnWP1GxYsJKWmUOJejOT9JFJrYA'
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
