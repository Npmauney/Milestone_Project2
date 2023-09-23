const React = require('react')
const Default = require('./layouts/default')
import Carousel from 'react-bootstrap/Carousel';

function Index ({ movies }) {
    const movieDisplay = trendingMovies.results.map(movie => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
                <div className='white' key={movie.id}>
                    <a href={`/movies/${movie.id}`}>
                        {movie.title}
                    </a>
                </div>
        )  
    })

    const posterDisplay = trendingMovies.results.map(movie => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
            <div id='poster' key={movie._id}>
                    {movie.poster_path}
            </div>
        )        
    })

    const altDisplay = movies.map((movie) => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
            <div id='poster' key={movie._id}>
                <a href={`/movies/${movie._id}`}>
                    {movie.original_title}
                </a>
            </div>
        )        
    })

    const trendingDisplay = trendingMovies.results.map(movie => {
        return (
            <div className='white' key={movie.id}>
                {movie.title}
            </div>
        )
    })

    // const bakerDisplay = bakers.map(baker => {
    //     return (
    //         <li key={baker._id}>
    //             <a href={`/bakers/${baker._id}`}>
    //                 {baker.name}
    //             </a>
    //         </li>
    //     )
    // })

    return (
        <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <Default>
         <h2>Trending Movies</h2>
        <Carousel>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original${posterDisplay[0]}`} alt={altDisplay[0]}/>
                <Carousel.Caption>
                <h3>{movieDisplay[0]}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original${posterDisplay[1]}`} alt={altDisplay[1]}/>
                <Carousel.Caption>
                <h3>{movieDisplay[1]}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original${posterDisplay[2]}`} alt={altDisplay[2]}/>
                <Carousel.Caption>
                <h3>{movieDisplay[2]}</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <h1>Test</h1>
        <h5>{trendingDisplay}</h5>
        <h5>{posterDisplay[0]}</h5>
        <img src={`https://image.tmdb.org/t/p/original${posterDisplay[0]}`} />
        <h5><a href={`https://image.tmdb.org/t/p/original/${posterDisplay[0]}`}>{`https://image.tmdb.org/t/p/original/${posterDisplay[0]}`} {posterDisplay[0]} </a></h5>
      </Default>
      </html>
    )
}

module.exports = Index