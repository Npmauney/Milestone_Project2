const reviews = require('express').Router()
const Review = require('../models/review')
const reviewSeedData = require('../models/reviewSeedData')




reviews.get('/data/seed', async(req,res)=>{
  await Promise.all([Review.deleteMany()])
  const reviews = await Review.insertMany(reviewSeedData)
  res.redirect('/reviews')
})


//Home route for all comments
reviews.get('/', async (req, res)=>{
const reviews = await Review.find()
res.render('reviewBlog', {reviews})
})

reviews.get('/new', async(req, res)=>{
  res.render('newReview')
})

reviews.post('/', async (req, res)=>{
  await Review.create(req.body)
  res.status(303).redirect('/reviews')
})

reviews.get('/:id', async (req, res)=>{
  const {id} = req.params
  const review = await Review.findById(id)
  res.render('reviewShow', {review})
})

reviews.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  const review = await Review.findById(id)
  res.render('reviewEdit', {review})
})

reviews.delete('/:id', async (req, res)=>{
  const {id} = req.params
  await Review.findByIdAndDelete(id)
  res.redirect('/reviews')
})

reviews.put('/:id', async (req, res)=>{
  const {id} = req.params
  await Review.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/reviews/${id}`)
})

module.exports = reviews