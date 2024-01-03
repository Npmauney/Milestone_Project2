import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';
import { actorSeed } from '../models/actorSeedData';
import Movie from '../models/movie';
import movieseedData from '../models/movieSeedData';

const movies = Router();

// Seed data route
movies.get('/data/seed', async (req: Request, res: Response) => {
  await Promise.all([Movie.deleteMany()]);
  const moviesData = await Movie.insertMany(movieseedData);
  const movieIds = moviesData.map(movie => movie._id);
  res.redirect('/movies');
});

// Home Route for all the movies
movies.get('/', async (req: Request, res: Response) => {
  const API = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0');
  const trendingMovies = await API.json();
  const moviesData = await Movie.find();
  res.render('index', { movies: moviesData, trendingMovies });
});

// Render new movie page
movies.get('/new', async (req: Request, res: Response) => {
  res.render('newMovie');
});

// Get favorites pages
movies.get('/favorites', async (req: Request, res: Response) => {
  res.render('favorites');
});

// Create a movie
movies.post('/', async (req: Request, res: Response) => {
  await Movie.create(req.body);
  res.status(303).redirect('/movies');
});

// Get a specific movie page - API NEEDS WORK
movies.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  let movieJson = movie?.toJSON();
  console.log(movieJson, 'Movie JSON object');
  res.render('movieShow', { movie });
});

// Get edit page for movie
movies.get('/:id/edit', async (req: Request, res: Response) => {
  const { id } = req.params;
  let movie = await Movie.findById(id);
  res.render('movieEdit', { movie }); // moviesEdit needs to be created
});

// Delete movie
movies.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete(id);
  res.redirect('/movies');
});

// Update movie
movies.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Movie.findByIdAndUpdate(id, req.body);
  res.status(303).redirect(`/movies/${id}`);
});

module.exports = movies;
