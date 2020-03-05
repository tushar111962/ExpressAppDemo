var express=require("express");
var app=express();


app.set("port",(process.env.PORT||5000))
app.set("view engine","ejs");

app.get("/",function(req,res){
 res.render("home");
});

app.get("/about",function(req,res){
 res.render("about");
});

app.listen(app.get("port"),function(){
    console.log("Server Started");
})