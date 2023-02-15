const express = require('express');
const { v4 : uuidv4 } = require('uuid');
const app = express();
const server = require('http').Server(app);



app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, resp)=>{
    resp.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, resp)=>{
    resp.render('room',{roomId: req.params.room})
})

app.listen(3000);