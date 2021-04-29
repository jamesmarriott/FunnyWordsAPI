const express = require('express');

const app = express();

//Middlewares



// ROUTES

app.get('/', (req, res) => {
  res.send('we are on home')
})

app.get('/posts', (req, res) => {
  res.send('we are on posts')
})


// Listen to the server

app.listen(3000);


