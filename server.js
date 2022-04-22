const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const user = require('./router/api/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/admin').then(() => {
  console.log('success')
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/api/user', user)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
