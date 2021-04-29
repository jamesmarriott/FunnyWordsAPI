const express = require('express')
const app = express()
const impData = require('./words.json')
let port = process.env.PORT || 3000

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