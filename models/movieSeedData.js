const Movie = require('../models/movie')
const { json, response } = require("express");

async function movieSeed(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
    }
  };

    let promises = {};
    for (let i = 1; i <= 300; i++) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${i}?language=en-US`, options)
    .then(response => response.json())
    .then(response => promises = response)
    .then(response => Movie.insertMany(response))
    .then(console.log(promises))
    
    }
}



module.exports = {

  movieSeed

}