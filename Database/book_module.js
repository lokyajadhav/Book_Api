//importing MongoDb
const mongoose= require("mongoose");

//creating Schema
const bookschema=mongoose.Schema(
    {
        Id:String,
        title: String,
        authors:[Number],
        languages:String,
        pubDate:String,
        numPage:Number,
        category:[String],
        publication:Number,
    }

    
    //creating module

    const Book_module=mongoose.model(bookschema);
    module.exports=Book_module;
)