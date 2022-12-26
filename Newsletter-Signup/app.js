//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

//to link with the css file under the public folder.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/failure", function(req,res){
    res.redirect("/");
});

app.listen(process.env.PORT||3000,function(){
    console.log("server started at port 3000");
});

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var secondName =req.body.sName;
    var email =req.body.email;
    
    var data = {
        members: [
            {email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:secondName
            }
            }
            
        ]
    };

    var jsonData = JSON.stringify(data);
    
    var options={
       url: "https://us17.api.mailchimp.com/3.0/lists/a199a4be14",
       method:"post",
       headers:{
           "Authorization":"neha 6e3ea4a34fbbdd52fd160fb1c5c6642c-us17"
       
        },
        body: jsonData
       

    };

    request(options,function(error,response,body){
        if(error){
            res.sendFile(__dirname + "/failure.html");
        }
        else{
            if(response.statusCode == 200){
                res.sendFile(__dirname + "/success.html");
            }
            else{
                res.sendFile(__dirname +"/failure.html");
            }
            
        }
    });
});

app.get("/", function(req,res){
    res.sendFile(__dirname +"/signup.html");
});




//6e3ea4a34fbbdd52fd160fb1c5c6642c-us17

//list id
//a199a4be14