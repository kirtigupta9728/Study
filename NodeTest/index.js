const express = require('express');
const cors = require('cors');
const login_routes=require('./User/API/LoginController.js');
const app = express ();
app.use(cors());
app.use(express.json());
app.use('/login_controller', login_routes);
const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });


