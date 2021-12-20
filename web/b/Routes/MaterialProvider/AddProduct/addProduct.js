const express = require("express");
const router = express.Router();

const addProduct = require('../../../Schema/MaterialProvider/AddProduct/addProduct');

router.post('/addProduct', (req,res,next)=> {
    const {email,title,description,price,stock,link,area} = req.body;

    const AddProduct = new addProduct({
        email:email,
        title:title,
        description:description,
        price:price,
        stock:stock,
        link:link,
        area:area
    });

    AddProduct.save().then(result=>{
        res.status(200);
        res.json();
        
    }).catch(err=> {
        console.log(err);
    });
})

router.get('/getProducts',async (req,res,next)=> {
    await addProduct.find().then(result=>{
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });
})

module.exports = router;