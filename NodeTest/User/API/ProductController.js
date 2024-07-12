const express =require('express');
const app=express.Router();
const database=require('../../Database/databaseConnectHandler');
app.get('/allProduct',async(req,res,next)=>{
    try {
        const db=await database('ProductList');
        const allProduct=await db.find().toArray();
        console.log('allProduct:::',allProduct)
           res.json(allProduct);
    } catch (error) {
        console.log(ex, 'Error')
    }
})
module.exports=app;
