const mongoose = require("mongoose");

const logInSchema = new mongoose.Schema(
    {
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true
        }
    });

module.exports = mongoose.model("LogInData", logInSchema);