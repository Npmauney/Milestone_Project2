module.exports = [
{
  original_lanugage: "en",
  original_title: 'Up',
  overview: 'Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.',
  poster_path: 'https://image.tmdb.org/t/p/original/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg',
  release_date: "2009-05-28"
},
{
  original_lanugage: "it",
  original_title: 'C era una volta il West',
  overview: "As the railroad builders advance unstoppably through the Arizona desert on their way to the sea, Jill arrives in the small town of Flagstone with the intention of starting a new life.",
  poster_path: 'https://i.scdn.co/image/ab67616d0000b273cf376cd64500ff03a9ed5ef4',
  release_date: "1968-12-21"
},
{
  original_lanugage: "en",
  original_title: 'Grown Ups 2',
  overview: 'Lenny has relocated his family back to the small town where he and his friends grew up. This time around, the grown ups are the ones learning lessons from their kids on a day notoriously full of surprises—the last day of school.',
  poster_path: 'https://musicart.xboxlive.com/7/1d321200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
  release_date: "2013-07-11"
}
]

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
    //.then(response => console.log(response))
    //.then(response => promises.push(response))
    .then(console.log(promises))
    
    }
}


module.exports = {

  movieSeed
// {
//   original_lanugage: "en",
//   original_title: 'Up',
//   overview: 'Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.',
//   poster_path: 'vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg',
//   release_date: "2009-05-28"
// },
// {
//   original_lanugage: "en",
//   original_title: 'Up',
//   overview: "Adolf Schwartz has been killed. Who did it? No-one knows or cares, as they're too busy being distracted by busty Margo Winchester, who hitch-hikes into town and gets involved with all the local men.",
//   poster_path: 'kU6wvyu8yxIf7IynQmn8P0Gi6fN.jpg',
//   release_date: "1976-10-01"
// },
// {
//   original_lanugage: "en",
//   original_title: 'Up',
//   overview: 'Up is a 1984 American short film directed by Mike Hoover and Tim Huntley. The film depicts a man who sets a hawk free, then tries to find it in the wild on his hang glider. In 1985, it won an Oscar for Best Short Subject at the 57th Academy Awards.',
//   poster_path: '1A82pXCVQyZ9Hh1VteuKchhJr1B.jpg',
//   release_date: "1984-01-01"
// }
}

