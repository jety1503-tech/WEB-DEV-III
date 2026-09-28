const express=require("express")
const app=express();
const PORT=3000



app.get("/",(req,res,next)=>{
    let age=16
    try{
        if(age<=18){
            throw new Error("Age is not valid");
        }else{
            res.send("Welcome to the home page");
        }
    }catch(err){
        next(err)
    }
})

app.use((req,res)=>{   //invalid route middleware
    res.status(404).send({
        success:false,
        message:"Page Not Found"
    })
})

app.use((err,req,res,next)=>{   //error  middleware
    res.status(500).send({
        success:false,
        message:err.message
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})