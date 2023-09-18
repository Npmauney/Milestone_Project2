const router = require('express').Router()
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')


//Seed data route
router.get('/data/seed', async (req, res)=>{
  await Promise.all([Movie.deleteMany()])
  const movies = await Movie.insertMany(movieseedData)
  const movieIds = movies.map(movie => movie._id)
  // res.redirect('/movies')
  res.json(movies)
})


//Home Route for all the movies
router.get('/', async(req, res)=>{//this route works fine
  const movies = await Movie.find()
  res.render('index', {movies})
})

//Get a specific movie page
router.get('/:id', async (req, res)=>{//this route works fine
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieShow', {movie})
  // res.json(movie)
})

//Create a movie
router.post('/', async (req, res)=>{//this route needs work. It does post but without the body even though i put a subject in the body of postman
  console.log(req.body)
  let createdMovie = await Movie.create(req.body)
  res.send(createdMovie)
})

//Render new movie page
router.get('/newmovie', async (req, res)=>{
  const movies = await Movie.find()
  // res.render('newMovie', {movies})// newmovie needs to be created
})

//Get edit page for movie
router.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  let movie = await Movie.findById(id)
  // res.render('moviesEdit', {movie})// moviesEdit needs to be created
  res.json(movie)
})

router.delete('/:id', async (req, res)=>{
  const {id} = req.params
 let deletedMovie = await Movie.findByIdAndDelete(id)
  // res.redirect('/movies')
  res.json(deletedMovie)
})

router.put('/:id', async (req, res)=>{
  const {id} = req.params
  let updatedMovie = await Movie.findByIdAndUpdate(id, req.body)
  // res.status(303).redirect(`/movies/${id}`)
  res.json(updatedMovie)
})

module.exports = router