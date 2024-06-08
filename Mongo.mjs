import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
// const DBURL = process.env.DBCONNECT
const CONNECTIONSTRING = process.env.DB_CONNECTIONSTRING

mongoose.connect(CONNECTIONSTRING)
.then(()=>{
    console.log("DataBase connected")
})
.catch(()=>{
    console.log('failed to connect Database')
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",userSchema)

export default User