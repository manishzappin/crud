const mongoose  = require('mongoose');

const data =  new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    city:String,
}, {timestamps:true} )

const Data = mongoose.model('data',data);

module.exports = Data;
