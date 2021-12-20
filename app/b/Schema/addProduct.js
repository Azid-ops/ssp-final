const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addProduct = new Schema({
    gmail: {
        type:String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    stock:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Add Product", addProduct);

