//require express
const express=require("express")
//require connectDB
const connectDB=require('./config/connectDB')
//require the router
const authRouter=require('./routes/auth')
//init express
const app=express()

//Middleware==Parse the data to json
app.use(express.json())
//connectDB
connectDB()
app.use("/api/auth",authRouter)
const port=5000

//lunch the server
app.listen(port,(error) =>
error?
console.log(error)
:console.log(`the server is running on port ${port}`)
)
