const express= require('express')
const app=express();
const route=require("./routes/book")
require('./db/conn');
const port =process.env.PORT || 3000;

app.use(express.json());// JSON postman requests can be used now
app.use(route);
app.listen(port,()=>{
    console.log(`connection is live at port no. ${port}`)
})