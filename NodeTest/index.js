const express = require('express');
const cors = require('cors');
const login_routes=require('./User/API/LoginController.js');
const product_routes=require('./User/API/ProductController.js')
const adddToCart_routes=require('./User/API/AddToCartController.js')
const deleteFromCart_routes=require('./User/API/DeleteController.js')

const app = express ();
app.use(cors());
app.use(express.json());

app.use('/login_controller', login_routes);
app.use('/product_controller', product_routes);
app.use('/addToCart_controller', adddToCart_routes);
app.use('/deleteFromCart_controller', deleteFromCart_routes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
 


