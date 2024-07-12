const express =require('express');
const app=express.Router();
const database=require('../../Database/databaseConnectHandler');
app.post('/addTocart',async(req,res,next)=>{
    try {
        const{userId,product_name,product_img,product,product_id}=req.body;
        const db=await database('AddtoCart');
        const productdb=await db.insertOne({userId,product_name,product_img,product,product_id});
        res.json(productdb);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
})

app.get('/getAddTocart',async(req,res,next)=>{
    try {
        const db=await database('AddtoCart');
        const productdb=await db.find().toArray();
        res.json(productdb);
        //res.json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error while deleting record:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
})

module.exports=app;