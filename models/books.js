const mongoose=require('mongoose');
const { string } = require('yargs');

const booksschema=new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 author:{
    type:String,
    required:true
 }
}
 ,{
    timestamps:true

})

const books=mongoose.model("books",booksschema);
module.exports=books();