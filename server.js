const express = require("express")
const app = express()
const bp = require('body-parser')
const fs = require('fs')

app.use(express.static('client'))
app.use(bp.urlencoded())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/index.html")
})

app.get("/registration", (req, res) => {   
    res.sendFile(__dirname + "/client/registration.html")
})

app.post("/homePage", (req, res) => {
    fs.appendFile('server.txt', 
    req.body.userName + " " + req.body.email + " " + req.body.password,
    err => {if(err) throw err})
    res.sendFile(__dirname + "/client/homePage.html")
})



app.listen('3000')