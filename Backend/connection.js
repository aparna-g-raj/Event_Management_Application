const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://agr2k03:JCVFL2QAy4i9zD67@cluster0.ipbzrv9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log("DB is connected")
}).catch((res)=>{
    console.log("DB not connected")
})