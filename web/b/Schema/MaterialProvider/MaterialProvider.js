//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const materialProvider = new Schema({

    //Setting Values and their type
    fname:{

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
    password:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    select:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    }
});

//Exporting SignUp Model
module.exports = mongoose.model("materialProvider", materialProvider);