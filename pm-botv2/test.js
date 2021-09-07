const express = require('express');
const app = express();
app.get('/', (req,res) => {
    var i = "allah"
    res.send('hi')
})

app.listen(3000)