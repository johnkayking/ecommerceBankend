const express = require("express")
const { registration ,userLogin} = require("../CONTROLLER/controllerAmazon")


const route = express.Router()

  

route.post("/registration",registration)
route.post("/login",userLogin)
console.log("GET/login",userLogin)




module.exports = route