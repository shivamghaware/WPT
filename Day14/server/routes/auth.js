const express=require('express');
const app=express.Router();
const jwt=require('jsonwebtoken');
const config=require('config');

app.post("/",(req,res)=>{
    if(req.body.username=='shivam' && req.body.password=="shivam"){
        const secretKey=config.get("jwtsecretkey");
        //req.body. ip,machine
        const payload={ 
                username:req.body.username,
                role:'admin',
                tokenCreatedOn:'04:51.05052026',
                isValid:true
        }
        const token=jwt.sign(payload,secretKey);
        res.json({token:token});
        // res.json({"token":"hardcoded token"});
    }else{
        res.json({"error":"invalid credentials"});
    }
})
module.exports=app;