// console.log("chai aur code");
require('dotenv').config();
const express=require('express');

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hello world");
});
app.get('/twitter',(req,res)=>{
    res.send("fuselam electronics");
});
app.get('/login',(req,res)=>{
    res.send("<h3>yes we have login terminal</h3>");
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>");
});
// console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`Example app Listening on the port ${process.env.PORT}`);
})
















