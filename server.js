const app = require('./app')
// const dotenv = require('dotenv')
const connectDatabase = require('./config/database')
//const hbs = require("hbs")
const path = require("path")

//Handling Uncaught Exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})


// ConfiG
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"config/config.env"})
}

app.get("/api/v1/form", (req, res) => {
    res.render("index")
})

//app.get("/api/v1/form/new", (req,res) => {
//    res.render("new")
//})
// Connecting to database
connectDatabase()

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})

// Unhandled Promise Rejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the sever due to Unhandled Promise Rejection`)

    server.close(()=>{
        process.exit
    })
})