// This server is only used to serve the assets site static build
// For local development, use gatsby's built in server using `npm start`

var express = require("express")
var path = require("path")
var serveStatic = require("serve-static")

var app = express()

app.use(serveStatic(path.join(__dirname, "public"), { index: ["index.html"] }))
app.listen(8000)
console.log("Listening on port 8000")
