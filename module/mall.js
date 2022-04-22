const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MallSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  surplus_stock: {
    type: Number,
    required: true
  }
})



module.exports = mongoose.model('Mall', MallSchema)
