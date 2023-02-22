const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    isbn:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    }
})

//model is BookDB and collection name in db would be bookdb
module.exports=mongoose.model("BookDB",bookSchema)