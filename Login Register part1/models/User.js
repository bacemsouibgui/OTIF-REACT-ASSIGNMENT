// require mongoose
const mongoose=require('mongoose')
const { stringify} = require('nodemon/lib/utils')

//require schema from mongoose
const Schema=mongoose.Schema

//create the schema
const userSchema=new Schema ({
    name: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports=User=mongoose.model("User",userSchema)