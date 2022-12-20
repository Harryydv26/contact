const express = require("express");
const Router  = express.Router();
const Conatct = require("../models/user")

const csvtojson = require("csvtojson");

Router.post("/add", async (req, res) =>{
	csvtojson()
        .fromFile("./contacts.csv")
            .then(csvdata=>{
                console.log(csvdata);
                Conatct.insertMany(csvdata).then(function(){
                    console.log("data inserted");
                    res.json({success:"success"});
                }).catch(function(error){
                    console.log(error);
                })
            })
});

module.exports= Router;