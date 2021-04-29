const express = require('express')
const app = express()
const importData = require('./data.json')
let port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("hello wolrd")
})

app.get("/players", (req, res) => {
  res.send(importData)
})

app.listen(port, () => {
  console.log(`App is on http://localhost:${port}`)
})


// funnywordsapinodejs.herokuapp.com/
// git.heroku.com/funnywordsapinodejs.git 