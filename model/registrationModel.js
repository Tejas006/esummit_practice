const mongoose = require("mongoose")

const regSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Name"]
    },
    email:{
        type: String,
        required: [true, "Please Enter email"],
        unique: [true, "These email is already used"]
    },
    phone:{
        type: Number,
        required: [true, "Please Enter Phone number"],
        unique: [true, "These phone number is already used"]
        
    },
    message:{
        type: String,
        default: "nil"
    }
})

module.exports = mongoose.model("regForm", regSchema)