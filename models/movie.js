const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  original_language: {
    type: String,
    required: true
  },
  original_title: {
    type: String,
    required: true
  },
  overview:{
    type: String,
    required: true
  },
  poster_path:{
    type: String
  },
  release_date:{
    type: Date,
    required: true
  }
})


module.exports = mongoose.model('movie', movieSchema)