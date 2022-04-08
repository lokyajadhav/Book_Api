const book=[
    {
        Id:"b172232",
        title:"Getting started with mern",
        authors:[1,2],
        languages:"english",
        pubDate:"2022-04-03",
        numPage:222,
        category:["fiction","programming","tech","webDEv"],
        publication:1,
    },
    {
        Id:"b172233",
        title:"Getting started with mern",
        authors:[1,2],
        languages:"english",
        pubDate:"2022-04-03",
        numPage:222,
        category:["fiction","programming","tch","webDEv"],
        publication:1,
    },
]
const author=[
    {
        id:1,
        name:"lokya",
        books:["b172232"],
    },
    {
        id:2,
        name:"jadhav",
        books:["b172233"],
    },
]
const publication=[
    {
        id:1,
        books:["b177232","b172233"],
        name:"lokya_jadhav",
    },
]

module.exports={book,author,publication};