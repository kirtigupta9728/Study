const express = require('express');
const app = express.Router();
const dataBase=require('../../Database/databaseConnectHandler')
app.get('/login', async(req,res,next)=>{
    try{
        const db=await dataBase('User');
        const userdb=await db.find().toArray();
        res.json(userdb);

    } catch(ex){
        console.log(ex, 'Error')
    }
});
app.post('/Auth', async(req,res,next)=>{
    try{
        const{username,password}=req.body;
        const db=await dataBase('User');
        const userdb=await db.findOne({username,password});
        res.json(userdb);

    } catch(ex){
        console.log(ex, 'Error')
    }
});
module.exports =  app;