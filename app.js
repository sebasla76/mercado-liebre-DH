const express = require('express');
const app = express();
const path = require('path');
app.listen(process.env.PORT||3000,()=> console.log("servidor corriendo"));
const publicPath=path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
app.get('/' ,(req,res)=>{
    res.sendFile(path.join(__dirname,"views/indexcopy.html")
    )});
app.get('/register.html' ,(req,res)=>{
    res.sendFile(path.join(__dirname,"views/register.html")
     )});    
app.get('/login.html' ,(req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html")
     )});         

     

    // app.listen(process.env.PORT || 3000, () => {
     //   console.log("Se prendió!");
   // });