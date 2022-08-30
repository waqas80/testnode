const express = require('express');
const router = express.Router();

router.get('/brids',(req,res) => {
    res.send('There number of brids in the world.')
});

module.exports = router;