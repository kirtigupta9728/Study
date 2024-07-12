const express =require('express');
const app=express.Router();
const database=require('../../Database/databaseConnectHandler');

app.delete('/deleteFromCart/:id',async(req,res,next)=>{
    try {
       // const id = parseInt(req.params.id);
        const id = req.params.id;
        console.log(id, '#$%^&');
        const db=await database('AddtoCart');
        const productdb=await db.deleteOne({product_id: id});
        if(productdb.deletedCount === 1) {
        console.log('Product successfully deleted');
        res.json({ message: 'Product successfully deleted' });
        } else {
            console.log('No product found with the specified ID');
            res.status(404).json({ error: 'No product found with the specified ID' });
        }

        res.json(productdb);
    } catch (error) {
        console.error('Error while deleting record:', error);
        res.status(500).json({ error: 'An error occurred while deleting the record' });
    }
})

module.exports=app;