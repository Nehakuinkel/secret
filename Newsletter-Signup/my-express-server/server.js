//jshint esversion :6
const express = require("express");
const app = express();

app.get("/" , function(req,res){
    res.send("<h1> Hello World!! </h1>");
});

app.get("/contact" , function(req,res){
    res.send("contact me at sharma.neha.ns729@gmail.com");
});

app.get("/about" , function(req,res){
    res.send("<h1>hey, i am neha i like coding and diet coke.</h1>");
});
app.listen(3000 , function(){
    console.log("server started on port 3000.");
});
