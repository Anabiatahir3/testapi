const express=require("express")
const route=new express.Router
const BookDB = require("../models/books")

route.post("/books", async (req,res)=>{
    try{
        const record=new BookDB(req.body);//data coming from postman in json format
        console.log(req.body);
        const addRecord= await record.save();
        res.send(addRecord).status(201);
    }catch(e){
        res.status(400).send(e);
    }
})
route.get("/books", async (req,res)=>{
    try{
        const getRecords=await BookDB.find({}).sort({"isbn":1});
        res.status(201).send(getRecords)
    }catch(e){
        res.status(400).send(e);
    }
})

//handling request for an individual based on isbn
route.get('/books/:isbn', async (req,res)=>{
    try{
        const isbn=req.params.isbn;
        const getRecord=await BookDB.find({isbn});
        res.send(getRecord);
    }catch(e){
        res.status(400).send(e);
    }
})
route.patch("/books/:id", async (req,res)=>{
    try{
        const _id= req.params.id;
        const getInfo=await BookDB.findByIdAndUpdate(_id,req.body,{new:true}) //req.body comes from postman
        res.send(getInfo)
    }catch(e){
        res.status(500).send(e);
    }
})
route.delete("/books/:id", async (req,res)=>{
    try{
        const id=req.params.id;
        const deleteRecord=await BookDB.findByIdAndDelete(id);
        res.send(deleteRecord)
    }catch(e){
        res.status(500).send(e);
    }
})
module.exports=route;