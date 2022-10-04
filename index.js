const express=require('express')
const app=express()

app.get("*",(req,res)=>{
    res.send("<h1>HELLO GUYZz........</h1>")
})

port=process.env.PORT||5000
app.listen(port,()=>{
    console.log('app started on port '+port);
})