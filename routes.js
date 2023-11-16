const { getDb } = require("./config/db")
const routes=require("express").Router()

let db


routes.get("/books", async (req,res)=>{
    db=getDb()
      try {
        const collection=db.collection("books")
        const data=await collection.find({}).toArray();
        res.json(data)
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      }
    })

    // // post routes
    routes.post("/adddata",(req,res)=>{
        db=getDb()
    const book=req.body
    db.collection('books')
    .insertOne(book)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(400).json({err:"could not create a new document"})
        console.log(err.message)
    })
})


    module.exports={routes}