
const express = require('express')
const connection = require('./db/connection')
const app = express()
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
connection()
const User = require('./models/user')
app.use(userRoute)
const port = process.env.PORT





app.post('/register', (req, res) => {
  // console.log(req.body)
  User.create(req.body)
  res.send( {msg:"registered succesfully"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

