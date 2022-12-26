//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homePage="hello there! this is the simple personal blog so ..."
const aboutPage = "this is a about page";
const contactPage = "this is a contact page";

const app = express();


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts =[];

app.get("/", function(req,res){
    res.render("home",
    {pageHeading:homePage,
    posts:posts 
    });  
});

app.get("/about", function(req,res){
    res.render("about",{aboutContent: aboutPage});
});

app.get("/contact", function(req,res){
    res.render("contact", {contactContent : contactPage });
});

app.get("/compose", function(req,res){
    res.render("compose");
});

app.post("/compose", function(req,res){
  const post ={
      title: req.body.postTitle,
      content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", function(req,res){
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle = _.lowerCase(post.title);
    if(storedTitle === requestedTitle){
        res.render("post",{
            title: post.title,
            content: post.content
        });
    }
    
});
    
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});