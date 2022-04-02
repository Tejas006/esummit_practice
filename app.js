const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express()

// ConfiG
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"config/config.env"})
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/public')));

//app.use(express.static(static_path))
app.set("view engine", "hbs")
app.use(express.urlencoded({extended:false}))

//Route imports
const form = require('./routes/formRoute')

app.use("/", form)

//app.get("/")
module.exports = app