const express = require("express");
const router = express.Router();
const Register = require('../../../Schema/Register/register');

router.get('/getReg', async (req,res,next)=>{
    await Register.find().then(success =>{
        res.send(success);
    }).catch(err=>{
        console.log(err);
    });

    console.log("Getting data");
});

module.exports = router;
