//Importing Express
const express = require('express');

// Initializing Express 
const app = express();

const MaterialProviderSignUp = require('./Routes/MaterialProvider/Signup/MaterialProvider');

const Register = require('./Routes/MaterialProvider/Register/register');

const GetRegister = require('./Routes/MaterialProvider/Register/getReg');

const DeleteProduct = require('./Routes/MaterialProvider/DeleteProduct/deleteProduct');

const UpdateProduct = require('./Routes/MaterialProvider/UpdateProduct/updateProduct');

const MaterialProviderLogin = require('./Routes/MaterialProvider/Login/MaterialProvider');

const Authentication = require('./Routes/Authentication/Auth');

const AddProduct = require('./Routes/MaterialProvider/AddProduct/addProduct');

const mongoose = require("mongoose");

//Importing Body-Parser
app.use(express.json());

app.use(MaterialProviderSignUp);

app.use(MaterialProviderLogin);

app.use(Register);

app.use(GetRegister);

app.use(AddProduct);

app.use(UpdateProduct);

app.use(DeleteProduct);

app.use(Authentication);

console.log("[app.js] Backend")


mongoose.connect("mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/test").then(res=>{
    app.listen(5000)
}).catch(err=>{
    console.log(err);
});