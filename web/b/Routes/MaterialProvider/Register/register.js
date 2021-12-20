const express = require("express");
const router = express.Router();
const Register = require('../../../Schema/Register/register');

router.post("/UserRegister", (req,res,next)=> {
    console.log("[Register.js]");
    const {
        cname,
        email,
        location,
        delivery,
        image
    }= req.body;

    const Reg = new Register({
        cname:cname,
        email:email,
        location:location,
        delivery:delivery,
        image:image
    })

    Reg.save().then(result=>{
        res.status(200).send({result:"Successfully got Response"})
    }).catch(err=>{
        console.log(err);
    });
});
module.exports = router;