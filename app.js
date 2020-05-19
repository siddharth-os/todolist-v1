//jshint esversion:6
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const date=require(__dirname+ "/date.js");

const newTasks=["Eat","Sleep","code"];
const workList=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  let day=date.getDate();
  res.render("list",{listTitle:day,newItemSet:newTasks});
});

app.post("/",function(req,res){
  if(req.body.list==="Work"){
    newTask=req.body.newTask;
    workList.push(newTask);
    res.redirect("/work");
  }
  else{
    newTask=req.body.newTask;
    newTasks.push(newTask);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newItemSet:workList});
});

app.get("/about",function(req,res){
  res.render("about",{});
});

app.listen(3000,function(){
  console.log("Server is listening at port 3000");
});
