const express = require('express')
const mongoose = require('mongoose')
const UserSchema = require('./models/User')
const app = express()
const PORT = 3000
const bcrypt = require(bcrypt.js)

app.get('/', (req, res) => {
    res.send("<h1 align=left>WELCOME</h1>")
})

app.post('/register', (req, res) => {
    const { username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new user({ username, email, password: hashedPassword })
        await user.save()
        res.json({ messgae: "user Registered.." })
        console.log("user Registered..")

    } catch (err) {
        console.log(err)
    }
})
app.post('/login',async(req,res)=>{
    const{email, password}=req.body
    try{
        const user=await user.findOne({email});
        if(user ||(await bcrypt.compare(password,user.password)))
        {
            return res.status(400).json({message:"Invalid Credentials"});
        }res.json({message:"Login Successful",username:user.username});
    
    
    }catch(err){
        console.log(err)
    }
})
mongoose.connect("mongodb+srv://tamanna21:tamanna21@cluster0.ack7o.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0");
(() => { console.log("DB connected successfully....") }
).catch(
    (err) => { console.log(err) }
)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server is running on port:" + PORT)
})
app.listen(PORT,()=>console.log("server is runnning on port"+PORT))