const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model('User', UserSchema)
