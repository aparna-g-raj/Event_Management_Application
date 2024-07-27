const express=require('express');
const app=new express();
const PORT=4000;
const eventModel=require('./model/eventData');
require('./connection');
//to fetch the event data
app.get('/events',async(req,res)=>{
    try{
        const data= await eventModel.find();  //find used to fetch all data
        res.send(data)
    }catch (error){
        console.log(error)
    }
})

//server activate
app.listen(PORT,()=>{
    console.log("server is running on Port 4000")
})