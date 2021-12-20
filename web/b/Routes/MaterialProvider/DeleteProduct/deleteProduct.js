const express = require("express");
const router = express.Router();

const addProduct = require('../../../Schema/MaterialProvider/AddProduct/addProduct');

router.post('/deleteProduct', (req,res,next)=> {
    const {id} = req.body;
    addProduct.findByIdAndDelete(id).then(res=>{
        console.log("Successfully Deleted");
    }).catch(err=>{
        console.log("Error");
    })
})

module.exports = router;