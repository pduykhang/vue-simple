const express = require('express') 
const history = require('connect-history-api-fallback') 
const jsonServer = require("json-server")
const bodyParser = require('body-parser')

const auth = require('./middleware.js')
const router = jsonServer.router('./data.json')

const app = express()
app.use(bodyParser.json())
app.use(auth)
app.use("/api",router)
app.use(history())
app.use("/",express.static('./dist'))

app.listen(8080,function(){
    console.log("HTTP Server stating on port 8080")
})
