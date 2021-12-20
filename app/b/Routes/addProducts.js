const express = require('express');

const router = express.Router();

const bcrypt = require("bcryptjs");

const addProduct = require('../Schema/addProduct');

router.post('/addProduct',async (req,res,next)=>{
    console.log("[addProduct.js] addProduct Route");
    const {gmail,title,description,price,stock} = req.body;

    const AddProduct = new addProduct({
        gmail:gmail,
        title:title,
        description:description,
        price:price,
        stock:stock
    });

    AddProduct.save().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;