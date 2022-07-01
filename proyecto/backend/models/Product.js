const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    title:  {
        type:String,
        require: true
    },
    price: {
        type:Number,
        require: true
    },
    image: {
        type:String,
        require: true
    }

});

module.exports = mongoose.model("Products", ProductsSchema);