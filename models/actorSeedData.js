 const { json, response } = require("express");
 //const Actor = require('../models/actor')

// async function actorSeed() {
//     await Actor.deleteMany()

//     let i = 1

//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
//         }
//       };
//       const response = await  fetch(`https://api.themoviedb.org/3/person/${i}?api_key=8a84e44e1b62f0e80accee95d9a91cd0`, options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
//     const data = await response.json()

//     let nextUrl = `https://api.themoviedb.org/3/person/${(i + 1)}?api_key=8a84e44e1b62f0e80accee95d9a91cd0` 
    
//     const promises = actorUrl.map((actorUrl) => processActors(actorUrl))
//     const actor = await Promise.all(promises)
      
//     while(data.id != null){

//     const response = await fetch(`https://api.themoviedb.org/3/person/${i}?language=en-US`, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

    

//         const data = await response.json()

//     const actors = await Actor.insertMany(data)
//     const actorIds = actors.map(actor => actor._id)
//     res.redirect('/actors')

//     i = i + 1
//     }
// }

// async function processActors(url) {
    
//     const response = await fetch(url)
//     const data = await response.json()

    

//     return {
//         biography: {
//             type: String
//         },
//         birthday: {
//             type: String
//         },
//         deathday: {
//             type: String
//         },
//         gender: {
//             type: Number
//         },
//         name: {
//             type: String
//         },
//         place_of_birth: {
//             type: String
//         },
//         popularity: {
//             type: Number
//         }
//     }
// }

// module.exports = {
//     actorSeed
// }

async function actorSeed(){ 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
        }
      }

    let promises = {};
    for (let i = 1; i <= 2000; i++) {
    let response = await fetch('https://api.themoviedb.org/3/trending/person/week?language=en-US', options)
    .then(response => response.json())
    .then(response => promises = response)
    //.then(response => console.log(response))
    //.then(response => promises.push(response))
    .then(console.log(promises))
    
    //}
    

    }
  }

// async function actorSeed(){
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

module.exports = {
    actorSeed
}