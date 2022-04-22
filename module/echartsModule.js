const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EchartsSchema = new Schema({
  orderData: {
    type: Object
  },
  userData: {
    type: Array
  },
  videoData: {
    type: Array
  }
})



module.exports = mongoose.model('echartsModule', EchartsSchema)
