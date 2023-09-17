const router = require('express').Router()
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')


//Seed data route
router.get('/data/seed', async (req, res)=>{
  const movies = await Movie.insertMany(movieseedData)
  const movieIds = movies.map(movie => movie._id)
  res.redirect('/movies')
})


//Home Route for all the movies
router.get('/', async(req, res)=>{
  const movies = await Movie.find()
  res.json(movies)
})

//Get a specific movie page
router.get('/:id', async (req, res)=>{
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieShow', {movie})
})

router.post('/', async (req, res)=>{
  await Movie.create(req.body)
  res.status(303).redirect('/movies')
})
module.exports = router