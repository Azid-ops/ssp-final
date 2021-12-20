const express = require('express');;
const Router = express.Router();
const Authentication = require('../../Schema/Gmail/gmail');
const MaterialProvider = require('../../Schema/MaterialProvider/MaterialProvider');
const ServiceProvider = require('../../Schema/ServiceProvider/ServiceProvider');
const ServiceSeeker = require('../../Schema/ServiceSeeker/serviceSeeker');

Router.post('/AuthUser',async (req,res,next)=>{   
    const {account} = req.body;
    console.log("[Auth.js] Authentication");
    console.log("Getting here");
    Authentication.findOne({key:account}).then(result=>{
        const MaterialProviderObj = new MaterialProvider({
            email:result.gmail,
            fname:result.fname,
            password:result.password,
            select:result.select
        });

        const ServiceProviderObj = new ServiceProvider({
            email:result.gmail,
            fname:result.fname,
            password:result.password,
            select:result.select
        });

        const ServiceSeekerObj = new ServiceSeeker({
            email:result.gmail,
            fname:result.fname,
            password:result.password,
            select:result.select
        });

        if(result.select === "Material Provider")
        {
            MaterialProviderObj.save().then(result=>{
                res.status(200);
                res.json({Right:"Everything is All Good"});
            }).catch(err=>{
                console.log(err);
                res.status(400);
                res.json({Wrong:"Something went Wrong"})
            });
        }

        if(result.select === "Service Provider")
        {
            ServiceProviderObj.save().then(result=>{
                res.status(200);
                res.json({Right:"Everything is All Good"});
            }).catch(err=>{
                console.log(err);
                res.status(400);
                res.json({Wrong:"Something went Wrong"})
            });
        }

        if(result.select === "Service Seeker")
        {
            ServiceSeekerObj.save().then(result=>{
                res.status(200);
                res.json({Right:"Everything is All Good"});
            }).catch(err=>{
                console.log(err);
                res.status(400);
                res.json({Wrong:"Something went Wrong"})
            });
        }  
    }).catch(err=>{
        res.status(400);
        res.json({WrongKey: "Key is Wrong"});
    });

    
    
});

module.exports = Router;