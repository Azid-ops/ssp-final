const express = require("express");
const router = express.Router();

const addProduct = require('../../../Schema/MaterialProvider/AddProduct/addProduct');

router.post('/updateProduct', (req,res,next)=> {
    const {email,id,title,description,price,stock,link,area} = req.body;
    addProduct.findByIdAndUpdate(id).then(result=>{
        result.email = email;
        result.title = title;
        result.description = description;
        result.price = price;
        result.stock = stock;
        result.link = link;
        result.area = area;
        result.save().then(result=>{
            res.status(200).json();
        }).catch(err=>{
            res.status(404).json();
            console.log(err);
        })
    }).catch(err=>{
        res.status(400).json();
        console.log(err);
    })
})

module.exports = router;