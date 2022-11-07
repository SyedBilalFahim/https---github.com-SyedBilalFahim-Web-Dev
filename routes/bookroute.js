const express=require('express');
const router= express.Router();
const books=require("../models/books");
const bcrypt=require("bcrypt");
router.post('/addbooks',async(req,res)=>{
    try{
      const bookExist=await books.findOne({name: req.body.name});
      if(bookExist){
        return res.status(201).send({message: "Book Found!!",success:false})
      }
     
      const author=req.body.author;
      
   const newbook= new books(req.body);
   await newbook.save();
   res.status(201).send({message:"Book Added Successfully",success:true});
    }catch(error){
        res.status(400).send({message:"Error in adding books",success:true});
   
    }
})
router.get('/booklisting',async(req,res)=>{
    try{
        const bookExist=await books.findOne({name: req.body.name});
        if(bookExist){
          return res.status(201).get({message: "Book Found!!", success: true})
        }
        

         
    }catch(error){

    }
})
module.exports=router;
