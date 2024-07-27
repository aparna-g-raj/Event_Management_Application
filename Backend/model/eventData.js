const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({
    username:String,
    email:String,
    contactNumber:Number,
    eventsRegistered:Number
})
const eventData=mongoose.model('event',eventSchema);
module.exports=eventData