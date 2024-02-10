
const express = require('express')
const connection = require('./db/connection')
const app = express()
const cors = require('cors')
app.use(express.json())
require('dotenv').config()
const userRoute = require('./routes/user')
const productRoute = require('./routes/products')
const categoryRoute = require('./routes/categories.router')
const carouselRouter = require('./routes/carousel.router')
connection()
app.use(express.static('public'))
// const User = require('./models/user')
app.use(userRoute);
app.use(productRoute);
app.use(categoryRoute);
app.use(carouselRouter);

const port = process.env.PORT


app.get('/', (req, res) =>{
  res.json('Hello World!')
})

app.use(cors({
  origin: 'https://pc-info.vercel.app/'
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

