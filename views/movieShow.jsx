const React = require('react')
const Default = require('./layouts/default')

function individualMovieShow ({ movie }) {
    return (
      <Default>
          <h3>{movie.original_title}</h3>
          <img src={movie.poster_path}></img>
          <p>{movie.release_date.getFullYear()}</p>
          <p>{movie.overview}</p>
          <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
          <a href={`/movies/${movie._id}/edit`}>
          <button>Edit</button>
          </a>     
      </Default>
    )
}

module.exports = individualMovieShow