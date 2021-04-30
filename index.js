const express = require('express')
const cors = require ('cors')
const app = express()
const impData = require('./words.json')
const allowedOrigins = ['http://localhost:3000'];
let port = process.env.PORT || 3000

app.use(cors())

app.get("/", (req, res) => {
  res.send("Please check the documentation at https://github.com/jamesmarriott/FunnyWordsAPI to use the Funny Words API")
})

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get("/api/words", (req, res) => {
  res.send(impData)
})

app.get('/api/words/:id', (req, res) => {
  const course = impData.find(c => c.id === parseInt(req.params.id))
  if (!course) res.status(404).send('Nothing with this ID found')
  res.send(course)
})

app.listen(port, () => {
  console.log(`App is on http://localhost:${port}`)
})