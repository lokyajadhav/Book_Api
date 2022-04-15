


require("dotenv").config();

//importing mangoose

const mongoose=require("mongoose");
// importing express 

const express=require("express");

// initializing express

const bookie=express();

//using express
bookie.use(express.json());

;


//importing the database

const database= require("./Database/index");

//establishing mangoose connectio
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("connection Esablished"));

//const bookie=express();

//bookie.use(express.json());

//API for getting all books details
/*
Route           /
Description     get  all the books
Access          public
method          get
parameter       non
*/
bookie.get("/",(request,response)=>
{
    return response.json({books:database.book});

});

//API for getting specific book
/*
Route           /
Description     get  all the books
Access          public
method          get
parameter       id
*/
bookie.get("/book/:id",(req,res)=>
{
    const s_id=req.params.id;
    const arr=database.book.filter((bookk)=> bookk.Id==s_id);
    if(arr.length==0)
    {
        return res.json({"error":`No book forund of id no ${s_id}`})
    }
    else{
        return res.json({book:arr});
    }
});



//API for getting specific book bases on category
/*
Route           /category
Description     get  all the books based on category
Access          public
method          get
parameter       category
*/
bookie.get("/c/:category",(req,res)=>
{
    const cat=req.params.category;
    const arr=database.book.filter((bookk)=>
    bookk.category.includes(cat));
    

    if(arr.length==0)
    {
        return res.json({error: `the book not present the category of${cat}`});

    }
    else
    {
        return res.json({books:arr});
    }

})


//API for getting specific book bases on author
/*
Route           /author
Description     get  all the books based on author
Access          public
method          get
parameter       author
*/

bookie.get("/author/:authors",(req,res)=>
{
    const author_s=req.params.authors;
     const id_s=database.author.filter((a)=>
    a.name==author_s);
    
    
    const arr=database.book.filter((bookk)=>
    bookk.authors.includes(id_s[0].id));

    if(arr.length==0)
    {
        return res.json({error:`the books are not present written by ${author_s}`});

    }
    else{
        return res.json({books:arr});
    }
})


//API for getting all author details
/*
Route           /authors_dir
Description     get  all the authors
Access          public
method          get
parameter       non
*/
bookie.get("/authors_dir",(req,res)=>
{
    return res.json({authors: database.author});
})


//API for getting specific author details
/*
Route           /authors_dir
Description     get  the specific book
Access          public
method          get
parameter       author_id
*/
bookie.get("/authors_dir/:id",(req,res)=>
{
    const author_id=req.params.id;
    const author_det=database.author.filter((b)=>
    b.id==author_id)
    if(author_det.length==0)
    {
        return res.json({error:`there is no author exist with id: ${author_id}`})
    }
    else{
        return res.json({author:author_det})
    }
})


//API for getting  author details based on bood_id
/*
Route           /authors_book
Description     get  the  book based on book_id
Access          public
method          get
parameter       book_id
*/
bookie.get("/authors_book/:id",(req,res)=>
{
    const bood_id=req.params.id;
    const author_det=database.author.filter((a)=>
    a.books.includes(bood_id));
    if(author_det.length==0)
    {
        return res.json({error:"threre is no author !!!"})
    }
    else{
        return res.json({author:author_det})
    }
})



bookie.listen(3000,()=> console.log("server running"))
