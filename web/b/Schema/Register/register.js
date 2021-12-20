//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const Register = new Schema({

    //Setting Values and their type
    cname:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    email:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    location:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    delivery:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    image:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    }
});

//Exporting SignUp Model
module.exports = mongoose.model("Register", Register);