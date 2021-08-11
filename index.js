var express = require('express');
var app = express();
require('./bot');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send(process.env.BOT_TOKEN);
})

app.listen(3000, () => {
    console.log('start with nodemon');
})