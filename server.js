const express = require('express');
const { v4 : uuidv4 } = require('uuid');
const app = express();
const server = require('http').Server(app);



app.set('view engine', 'ejs');


app.get('/', (req, resp)=>{
    resp.render('room');
});

app.listen(3000);