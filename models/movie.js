const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
// const API = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0')
// const trendingMovies = await API.json()
// for(let i=0; i < trendingMovies.results; i++){
//   const listedMovie = new Movie({
//     id: trendingMovies.results[i].id,
//     title: trendingMovies.results[i].title,
//     original_language: trendingMovies.results[i].original_language,
//     overview: trendingMovies.results[i].overview,
//     release_date: trendingMovies.results[i].release_date,
//     poster_path: trendingMovies.results[i].poster_path,
//   });
// savedToMongo= listedMovie.save().then(movie=> res.send(movie))
  /// from youtube channel Programming experience
 
// }
const movieSchema = new mongoose.Schema({
  success: Boolean,
  adult: Boolean,
  backdrop_path: String,
  belongs_to_collection: [
    {
      name: String
    }
  ],
  budget: Number,
  genres: [
    {
      id: Number,
      name: String
    }
  ],
  homepage: String,
  id: Number,
  imdb_id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  production_companies: [
    {
      id: Number,
      logo_path: String,
      name: String,
      origin_country: String
    }
  ],
  production_countries: [
    {
      iso_3166_1: String,
      name: String
    }
  ],
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: [
    {
      english_name: String,
      iso_639_1: String,
      name: String
    }
  ],
  status: String,
  tagline: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
})



module.exports = mongoose.model('Movie', movieSchema)