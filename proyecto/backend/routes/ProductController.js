const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async(req, res) =>{
    try{
        const products = await Product.find();
        res.json(products) 
    } catch(err){
        res.json({message: err})
    }
});

router.post("/", async(req,res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image
    })
    try{
        const savedProduct = await product.save();
        res.json(savedProduct)
    } catch(err){
        res.json({message: err})
    }
});

router.get("/:productId", async(req,res) => {
    try{
        const product = await 
        Product.findById(req.params.productId);
        res.json(product)
    } catch(err){
        res.json({message: err})
    }
});

router.patch("/:productId", async(req,res) => {
    try{
        const updatedProduct = await Product.updateOne(
            {_id: req.params.productId},
            {$set: {price: req.body.price}}
        );
        res.json(updatedProduct)
    } catch(err){
        res.json({message: err})
    }
});

router.delete("/:productId", async(req,res) => {
    try{
        const removedProduct = await Product.remove({_id: req.params.productId});
        res.json(removedProduct)
    } catch(err){
        res.json({message: err})
    }
});

module.exports = router;