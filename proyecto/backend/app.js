const express = require("express");
const mongoose = require("mongoose");
const dataRoute = require("./routes/ProductController");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/UserController");

require("dotenv/config");


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/products", dataRoute);

app.use("/users", userRoute);

app.get("/",(req, res) =>{
    res.send("Home")
})

mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected to DB"));

app.listen(3001);