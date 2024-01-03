import { Router, Request, Response } from 'express';
import Review from '../models/review';
import reviewSeedData from '../models/reviewSeedData';

const reviews = Router();

reviews.get('/data/seed', async (req: Request, res: Response) => {
  await Promise.all([Review.deleteMany()]);
  const reviewsData = await Review.insertMany(reviewSeedData);
  res.redirect('/reviews');
});

// Home route for all comments
reviews.get('/', async (req: Request, res: Response) => {
  const reviewsData = await Review.find();
  res.render('reviewBlog', { reviews: reviewsData });
});

reviews.get('/new', async (req: Request, res: Response) => {
  res.render('newReview');
});

reviews.post('/', async (req: Request, res: Response) => {
  await Review.create(req.body);
  res.status(303).redirect('/reviews');
});

reviews.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  res.render('reviewShow', { review });
});

reviews.get('/:id/edit', async (req: Request, res: Response) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  res.render('reviewEdit', { review });
});

reviews.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.redirect('/reviews');
});

reviews.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Review.findByIdAndUpdate(id, req.body);
  res.status(303).redirect(`/reviews/${id}`);
});

export = reviews;
