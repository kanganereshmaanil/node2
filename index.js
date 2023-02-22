//Create a server using express and create route /api/main and send the response explaining what is express
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get("/",(req,res)=>{
    res.send("I am in Home Page..")
    res.end();
})
app.get("/gallery",(req,res)=>{
    res.send("I am in Gallery Page")
    res.end()
})
app.get("/contact",(req,res)=>{
    // res.send("Get of Submit..")
    res.render("Contact")
})

app.post('/submit',function(req,res){
    let name = req.body.name
    let email = req.body.email
    let number = req.body.number
    fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, function(err){
      if(err){
        console.log(err)
      }
      res.send("Data Submitted...")
    })
})
app.get('/submit',(req,res)=>{
    res.render('success')
})

app.listen(5000,()=>{
    console.log("Application is Running on port 5000");
})
module.exports=app
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get("/",(req,res)=>{
    res.send("I am in Home Page..")
    res.end();
})
app.get("/gallery",(req,res)=>{
    res.send("I am in Gallery Page")
    res.end()
})
app.get("/contact",(req,res)=>{
    
    res.render("Contact")
})

app.post('/submit',function(req,res){
    let name = req.body.name
    let email = req.body.email
    let number = req.body.number
    fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, function(err){
      if(err){
        console.log(err)
      }
      res.send("Data Submitted...")
    })
})
app.get('/submit',(req,res)=>{
    res.render('success')
})

app.listen(5000,()=>{
    console.log("Application is Running on port 5000");
})
module.exports=app