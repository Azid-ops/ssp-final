const express = require('express');

const router = express.Router();

const bcrypt = require("bcryptjs");

const userSigninSchema = require('../Schema/signup');

router.post('/userLogin',(req,res,next)=>{
    console.log("[signup.js] studentSignin Route");
    const {gmail,password,selectedValue} = req.body;
    userSigninSchema.findOne({
        email:gmail
    }).then(user=>{
        if(user)
        {
            if(user.retype === password)
            {
                if(selectedValue === "Material Provider")
                {
                    res.status(200).send({result:"User Found"});
                }

                if(selectedValue === "Service Provider")
                {
                    res.status(201).send({result:"User Found"});
                }

                if(selectedValue === "Service Seeker")
                {
                    res.status(202).send({result:"User Found"});
                }
            }

            else
            {
                res.status(401).send({result:"Wrong Credientials"});
            }
            
        }
        else
        {
            res.status(402).send({result:"User Not Found"});
        }
    }).catch(err=>{
        console.log(err);
    }).catch(err=>{
        console.log("Could not found")
        console.log(err);
    });
})

module.exports = router;