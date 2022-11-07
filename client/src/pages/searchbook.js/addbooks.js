import { async } from "q";
import React from "react";
import axios from 'axios';
import { toStatement } from "@babel/types";
function addbooks(){
const onfinish=async(values)=>{
    try {
        const res=await axios.post("/api/books/addbooks",values);
        if(res.data.success){
            toast.success(res.data.message);
        }


/* asdasdasdasdasdasdasd */




        else {
            toast.error(res.data.message);
        }
    } catch (error) {
        toast.error("Error")
        
    }
}


}