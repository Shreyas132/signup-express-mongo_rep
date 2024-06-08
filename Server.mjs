import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import User from './Mongo.mjs'

dotenv.config()

const App = express()
App.use(express.json())
App.use(express.urlencoded( { extended:true}))
App.use(cors())
const port = process.env.PORT || 8080


// App.get('/',cors(),(req,res)=>{


// })
App.post('/',cors(),async(req,res)=>{

    const {email,password} = req.body

    try{
        const check = await User.findOne({email:email})
        if(check){
            return res.json("exist")
        }
        res.json("not exist")

    }
    catch(error){
        res.json("not exist")
    }
})

App.post('/signup',cors(),async(req,res)=>{

    const {username,email,password} = req.body
    const newdata = {
        username:username,
        email:email,
        password:password
    }

    try{
        const check = await User.findOne({email:email})
        if(check){
            return res.json("Exist")
        }
        res.json("not exist")
        await User.insertMany([newdata])

    }
    catch(error){
        res.json("not exist")
    }
})
App.listen(port,()=>{
    console.log(`Server is listening on port${port}`)
})