const express = require('express');
const app = express();

app.get('/',((req, res) => {
    res.send("Welcome To Home Page")
}))


app.listen(80,() => {
    console.log("start!");
});

