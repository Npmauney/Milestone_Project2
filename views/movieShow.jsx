const React = require('react')
const Default = require('./layouts/default')

function individualMovieShow ({ movie }) {
    return (
      <Default>
          <h3>{movie.original_title}</h3>
          <p>{movie.poster_path} {movie.release_date.getFullYear()}</p>
          <p>{movie.overview}</p>
          <form action={`/bakers/${movie._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>     
      </Default>
    )
}

module.exports = individualMovieShow