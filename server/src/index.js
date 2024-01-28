
const express = require('express')
const connection = require('./db/connection')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
connection()
// const User = require('./models/user')
app.use('/', userRoute);
const port = process.env.PORT


app.get('/', (req, res) =>{
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

