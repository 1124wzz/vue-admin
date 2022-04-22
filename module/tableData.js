const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tableSchema = new Schema({
  result1: {
    type: Array
  },
  result2: {
    type: Array
  }
})



module.exports = mongoose.model('tableDate', tableSchema)
