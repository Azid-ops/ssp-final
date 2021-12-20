//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const addProduct = new Schema({

    //Setting Values and their type
    email:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    title:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    description:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    price:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    stock:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    link:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    area:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    }
});

//Exporting SignUp Model
module.exports = mongoose.model("Add Product", addProduct);