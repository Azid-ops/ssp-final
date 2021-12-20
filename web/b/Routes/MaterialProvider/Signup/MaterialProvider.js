const express = require('express');;
const Router = express.Router();
const bcrypt = require("bcryptjs");
const nodeMailer = require("nodemailer");
const Authentication = require('../../../Schema/Gmail/gmail');

Router.post('/materialProviderSignup',async (req,res,next)=>{
    console.log("[Material Provider Route] backend");
    const {fname,lname,password,retype,fields} = req.body;
    let hashedPassword;
    hashedPassword = await bcrypt.hash(password,12);
    let key;
    key = "_" + Math.random().toString(36).substr(2, 9);
    const Auth = new Authentication({
        gmail:lname,
        key:key,
        fname:fname,
        password:hashedPassword,
        Re:retype,
        select:fields
    });
    Authentication.findOne({gmail:lname}).then(result=>{
        if(!result)
        {
            if(lname.includes("@gmail.com"))
            {
                if(password.length > 5)
                {
                    if(password === retype)
                    {
                        let transporter = nodeMailer.createTransport({
                            host: "smtp.ethereal.email",
                            port: 587,
                            secure: false, // true for 465, false for other ports
                            auth: {
                              user: "myrl.gibson82@ethereal.email", // generated ethereal user
                              pass: "C9ADtkpuaZQK9SBEfd", // generated ethereal password
                            },
                        });

                        async function form()
                        {
                            let info = await transporter.sendMail({
                                from: 'azixace361@gmail.com', // sender address
                                to: `${lname}`, // list of receivers
                                subject: "Hello ✔", // Subject line
                                text: "Authentication", // plain text body
                                html: `${key}`, // html body
                                }).then((data)=>{
                                    return data
                                }).catch(err=>{
                                    return err;
                            });

                            if(info.messageId)
                            {
                                
                                Auth.save().then(result=>{
                                    console.log('Message sent: %s', info.messageId);
                                    console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
                                    res.status("200");
                                    res.json();
                                }).catch(err=>{
                                    console.log(err);
                                });
                            }
                            else{
                                console.log('Message Not sent');
                            }
                        }
                        form();
                    }
                    else
                    {
                        res.status("401");    
                        res.json();
                    }
                }
            }
        }
        else
        {
            res.status("402");    
            res.json();
        }
    })
    
});

module.exports = Router;