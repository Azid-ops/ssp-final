const express = require('express');

const router = express.Router();

const bcrypt = require("bcryptjs");

const addProduct = require('../Schema/addProduct');

router.get('/getProducts',async (req,res,next)=> {
    await addProduct.find().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
})

module.exports = router;