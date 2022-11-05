const express = require('express');
const app = express();
require('dotenv').config()
const dbconfig=require("./config/dbconfig");
app.use(express.json());
const bookroute=require("./routes/bookroute");
try{
app.use('/api/books',bookroute);
}catch(error){
    
}

const port = process.env.PORT || 3000;

app.listen(port,()=> console.log('Listening on port 5000'));
