const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  original_language: {
    type: String,
  },
  original_title: {
    type: String,
   
  },
  overview:{
    type: String,
  
  },
  poster_path:{
    type: String
  },
  release_date:{
    type: Date,
    
  }
})


module.exports = mongoose.model('Movie', movieSchema)