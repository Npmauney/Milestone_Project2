const movies = require('express').Router()
const { actorSeed } = require('../models/actorSeedData')
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')


//Seed data route
movies.get('/data/seed', async (req, res)=>{
  await Promise.all([Movie.deleteMany()])
   const movies = await Movie.insertMany(movieseedData)
  const movieIds = movies.map(movie => movie._id)
  res.redirect('/movies')

})

//Home Route for all the movies
movies.get('/', async(req, res)=>{//this route works fine
  const API = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0')
   const trendingMovies = await API.json()
  const movies = await Movie.find()
  res.render('index', {movies, trendingMovies})
})

//Render new movie page
movies.get('/new', async (req, res)=>{
  res.render('newMovie')// 
})

//Get favorites pages
movies.get('/favorites', async (req, res)=>{
  res.render('favorites')//page pending formatting
})

//Create a movie
movies.post('/', async (req, res)=>{//this route needs work. It does post but without the body even though i put a subject in the body of postman
 await Movie.create(req.body)
    res.status(303).redirect('/movies')
})

//Get a specific movie page - API NEEDS WORK
movies.get('/:id', async (req, res)=>{
  // const API = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0')
  // trendingMovies = await API.json()
  const {id}= req.params
  const movie = await Movie.findById(id)
  let movieJson = movie.json()
  console.log(movieJson, "Movie JSON object")
  res.render('movieShow', {movie})
})

//Get edit page for movie
movies.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  let movie = await Movie.findById(id)
  res.render('movieEdit', {movie})// moviesEdit needs to be created
})

//Delete movie
movies.delete('/:id', async (req, res)=>{
  const {id} = req.params
 await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
})

//Update movie
movies.put('/:id', async (req, res)=>{
  const {id} = req.params
  await Movie.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/movies/${id}`)
})



module.exports = movies