const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    console.log(req);
    res.send('hello')
})

app.listen(3000,(err)=>{
    if(!err){
        console.log("server started")
    }else{
        console.log(err);
    }
})