const express = require ("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendMail");
app.get("/",(req,res)=>{
    res.send("I am a server");
});

app.get("/sendemail",sendMail);

const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log("I ma live at server 5000");
        })
    }catch(err){}
}
start();
const nodemailer = require("nodemailer");