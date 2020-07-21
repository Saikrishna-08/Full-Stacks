const express=require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    // res.send("<h1>home page</h1>");
    res.render("index"); //  or index.hbs
 });
 
 //when we click on register link its href="/register"
 router.get("/register",(req,res)=>{
     // res.send("<h1>home page</h1>");
     res.render("register"); // or register.hbs
  });

  module.exports=router;
 