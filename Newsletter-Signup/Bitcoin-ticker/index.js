//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req,res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req,res){
   // console.log(req.body.crypto);
    var crypto= req.body.crypto;
    var fiat = req.body.fiat;
    var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker";
    var finalUrl= url + crypto + fiat;

   request(finalUrl, function(error,response,body){
    console.log(response.statusCode);
    //var data =JSON.parse(body);
    //var price = data.last;  last is the one of the object in price..
    //console.log(price)
    //console.log(body);

    //res.send("<h1>the current price of "+crypto+" is "+price+ fiat"</h1>");
   });
});

app.listen(3000,function(){
    console.log("server is running on port 3000");
});

