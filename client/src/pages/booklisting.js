import { async } from "q";
import React from "react";
import axios from 'axios';
import { toStatement } from "@babel/types";
function booklisting(){
const onfinish=async(values)=>{
    try {
        const res=await axios.get("/api/books/booklisting",values);
        if(res.data.success){
            toast.success(res.data.message);
        }
        else {
            toast.error(res.data.message);
        }
    } catch (error) {
        toast.error("Error")
        
    }
}


}