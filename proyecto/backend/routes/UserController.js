const express = require("express");
const User = require("../models/Users");

const router = express.Router();

router.get("/", async(req, res) =>{
    try{
        const users = await User.find();
        res.json(users) 
    } catch(err){
        res.json({message: err})
    }
});

router.post("/", async(req,res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password 
    })
    try{
        const savedUser = await user.save();
        res.json(savedUser)
    } catch(err){
        res.json({message: err})
    }
});

router.get("/:usersId", async(req,res) => {
    try{
        const user = await 
        User.findById(req.params.usersId);
        res.json(user)
    } catch(err){
        res.json({message: err})
    }
});

router.patch("/:usersId", async(req,res) => {
    try{
        const updatedPassword = await User.updateOne(
            {_id: req.params.usersId},
            {$set: {password: req.body.password}}
        );
        res.json(updatedPassword)
    } catch(err){
        res.json({message: err})
    }
});

router.delete("/:usersId", async(req,res) => {
    try{
        const deleteAccount = await User.remove({_id: req.params.usersId});
        res.json(deleteAccount)
    } catch(err){
        res.json({message: err})
    }
});

module.exports = router;