const express = require('express');
const route = express.Router();
const fs = require('fs');

route.get('/', (req, res) => {
    fs.readFile('./data.json', (err, data)=>{        
        res.render('index', {data : JSON.parse(data)});
    });
  
});

module.exports = route;