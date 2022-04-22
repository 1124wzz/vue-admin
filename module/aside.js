const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  path: {
    type: String
  },
  name: {
    type: String
  },
  label: {
    type: String
  },
  icon: {
    type: String
  },
  url: {
    type: String
  }
})



module.exports = mongoose.model('Aside', UserSchema)
