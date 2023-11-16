const {connectDB,getDb}=require("./config/db")
const express=require("express")
const {routes}=require("./routes")

const cors=require("cors")

require("dotenv").config()

const PORT=process.env.PORT;
const app=express()
app.use(cors());
app.use(express.json());
app.use("/red",routes)





connectDB((err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log(`app is listening on port ${PORT}`)
        })
      
    }
})

