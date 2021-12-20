const express = require("express");

const mongoose = require("mongoose");

const studentSignup = require('./Routes/signup');

const adminLogin = require('./Routes/signin');

const getProduct = require('./Routes/getProducts');

const addProduct = require('./Routes/addProducts');

const app = express();

app.use(express.json());

app.use(adminLogin);

app.use(addProduct);

app.use(getProduct);

app.use(studentSignup);



mongoose.connect("mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/SSPApp").then(res=>{
    app.listen(5000);
});