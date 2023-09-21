const movies = require('express').Router()
const { actorSeed } = require('../models/actorSeedData')
const movie = require('../models/movie')
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')
const { movieSeed } = require('../models/movieSeedData')


//Seed data route
movies.get('/data/seed', async (req, res)=>{
  
  await Promise.all([Movie.deleteMany()])
  
  // res.redirect('/movies')
  //res.json(movies)

  try{
    const movies = await Movie.insertMany(movieSeed())
    const movieIds = movies.map(movie => movie._id)
    res.json({ message: 'complete' })
  }catch(error){
    console.log('error', error)
    res.status(500).json({ message: 'error saving movies' })
  }
})


//Home Route for all the movies
movies.get('/', async(req, res)=>{//this route works fine
  const movies = await Movie.find()
  res.render('index', {movies})
})

//Create a movie
movies.post('/', async (req, res)=>{//this route needs work. It does post but without the body even though i put a subject in the body of postman
  console.log("I was hit")
  console.log(req.body)
  let createdMovie = await Movie.create(req.body)
  res.json(createdMovie)
})

//Get a specific movie page
movies.get('/:id', async (req, res)=>{//this route works fine
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieShow', {movie})
  // res.json(movie)
})


//Render new movie page
movies.get('/newmovie', async (req, res)=>{
  const movies = await Movie.find()
  // res.render('newMovie', {movies})// newmovie needs to be created
})

//Get edit page for movie
movies.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  let movie = await Movie.findById(id)
  // res.render('moviesEdit', {movie})// moviesEdit needs to be created
  res.json(movie)
})
movies.delete('/:id', async (req, res)=>{
  const {id} = req.params
 let deletedMovie = await Movie.findByIdAndDelete(id)
  // res.redirect('/movies')
  res.json(deletedMovie)
})

movies.put('/:id', async (req, res)=>{
  const {id} = req.params
  let updatedMovie = await Movie.findByIdAndUpdate(id, req.body)
  // res.status(303).redirect(`/movies/${id}`)
  res.json(updatedMovie)
})

module.exports = movies