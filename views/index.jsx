const React = require('react')
const Default = require('./layouts/default')
import Carousel from 'react-bootstrap/Carousel';
import '../public/bootstrap.min.css'

function Index ({ movies, trendingMovies }) {
    const trendingDisplay = trendingMovies.results.map(movie => {
        return (
                <div className='white' key={movie.id}>
                    <a href={`https://image.tmdb.org/t/p/original`+movie.poster_path}>
                        {movie.title}
                    </a>
                </div>
        )  
    })

    const posterDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='poster' key={movie._id}>
                    {movie.poster_path}
            </div>
        )        
    })

    const altDisplay = movies.map((movie) => {
        return (
            <div id='alt' key={movie.id}>
                <a href={`/movies/${movie.id}`}>
                    {movie.original_title}
                </a>
            </div>
        )        
    })

    const overviewDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='overview' key={movie._id}>
                <a href={`/movies/${movie._id}`}>
                    {movie.overview}
                </a>
            </div>
        )        
    })

    const movieDisplay = movies.map((movie) => {
        return (
            <li key={movie.id}>
                <a href={`/movies/${movie.id}`}>
                    {movie.original_title}
                </a>
            </li>
        )
    })


    return (
        <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Default>
         <h2>Trending Movies</h2>
        <Carousel>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original`+posterDisplay[0].props.children}/>
                <Carousel.Caption>
                <h3>{trendingDisplay[0]}</h3>
                <p>{overviewDisplay[0]}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original`+posterDisplay[1].props.children} alt={altDisplay[1]}/>
                <Carousel.Caption>
                <h3>{trendingDisplay[1]}</h3>
                <p>{overviewDisplay[1]}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={`https://image.tmdb.org/t/p/original`+posterDisplay[2].props.children} alt={altDisplay[2]}/>
                <Carousel.Caption>
                <h3>{trendingDisplay[2]}</h3>
                <p>{overviewDisplay[0]}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <h1>Test</h1>
        <h5>{movieDisplay}</h5>
        <h5>{trendingDisplay}</h5>
      </Default>
      </html>
    )
}

module.exports = Index