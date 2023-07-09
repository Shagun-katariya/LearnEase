const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email:String,
    Message:String
});

module.exports=mongoose.model("contacts", Contact)