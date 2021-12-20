const express = require('express');;
const Router = express.Router();
const bcrypt = require("bcryptjs");
const materialProvider = require('../../../Schema/MaterialProvider/MaterialProvider.js');
const serviceProvider = require('../../../Schema/ServiceProvider/ServiceProvider');
const serviceSeeker = require('../../../Schema/ServiceSeeker/serviceSeeker');

Router.post('/materialProviderLogin',async (req,res,next)=>{
    console.log("Logging in Providers");

    const {email,password,fields} = req.body;

    if(fields === "Material Provider")
    {
        //Checking if Entered Email exists or no
        materialProvider.findOne({email:email}).then(user=>{
            if(user)
            {
                bcrypt.compare(password,user.password).then(doMatch=>{
                    if(doMatch)
                    {
                        console.log("Matching")
                        res.status(200);
                        res.json();
                    }
                }).catch(err=>{
                    console.log("Not Matching")
                    res.status(402);
                    res.json();
                }); 
            }
            else
            {
                res.status(400);
                res.json();
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    if(fields === "Service Provider")
    {
        serviceProvider.findOne({email:email}).then(user=>{
            if(user)
            {
                bcrypt.compare(password,user.password).then(doMatch=>{
                    if(doMatch)
                    {
                        console.log("Matching")
                        res.status(200);
                        res.json();
                    }
                }).catch(err=>{
                    console.log("Not Matching")
                    res.status(402);
                    res.json();
                }); 
            }
            else
            {
                res.status(400);
                res.json();
            }
        }).catch(err=>{
            console.log(err);
        });
    }

    if(fields === "Service Seeker")
    {
        serviceSeeker.findOne({email:email}).then(user=>{
            if(user)
            {
                bcrypt.compare(password,user.password).then(doMatch=>{
                    if(doMatch)
                    {
                        console.log("Matching")
                        res.status(200);
                        res.json();
                    }
                }).catch(err=>{
                    console.log("Not Matching")
                    res.status(402);
                    res.json();
                }); 
            }
            else
            {
                res.status(400);
                res.json();
            }
        }).catch(err=>{
            console.log(err);
        });
    }
});

module.exports = Router;