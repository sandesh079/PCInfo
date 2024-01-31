
const express = require('express')
const connection = require('./db/connection')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
const productRoute = require('./routes/products')
connection()
// const User = require('./models/user')
app.use(userRoute);
app.use(productRoute);
const port = process.env.PORT


app.get('/', (req, res) =>{
  res.json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

