const movies = require('express').Router()
const { actorSeed } = require('../models/actorSeedData')
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')
const { movieSeed } = require('../models/movieSeedData')


//Seed data route
movies.get('/data/seed', async (req, res)=>{
  
  await Promise.all([Movie.deleteMany()])

  const movies = await Movie.insertMany(movieseedData)
  const movieIds = movies.map(movie => movie._id)
  res.redirect('/movies')

  
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

//Render new movie page
movies.get('/new', async (req, res)=>{
  res.render('newMovie')// newmovie needs to be created
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

//Get a specific movie page
movies.get('/:id', async (req, res)=>{//this route works fine
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieShow', {movie})
})


//Get edit page for movie
movies.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  let movie = await Movie.findById(id)
  res.render('movieEdit', {movie})// moviesEdit needs to be created
})
movies.delete('/:id', async (req, res)=>{
  const {id} = req.params
 await Movie.findByIdAndDelete(id)
  res.redirect('/movies')
})

movies.put('/:id', async (req, res)=>{
  const {id} = req.params
  await Movie.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/movies/${id}`)
})

module.exports = movies