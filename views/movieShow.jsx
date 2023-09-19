const React = require('react');
const Default = require('./layouts/default');


//need to change the post controller to not redirect, just add to favorites after Star is clicked
//isFavorite should be a boolean to be used to store in favorites collection
//This still needs work! - AG
function individualMovieShow({ movie }) {
  return (
    <Default>
      <h3>{movie.original_title}</h3>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
      <p>{new Date(movie.release_date).getFullYear()}</p>
      <p>{movie.overview}</p>
      <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>

      <form action={``} method='POST'>
        <div>
          <label>Favorite:</label>
          <button className={`star-button ${movie.isFavorite ? 'clicked' : ''}`} type="submit" name="starButton">
            {movie.isFavorite ? '' : ''}
          </button>
        </div>
      </form>
    </Default>
  );
}

module.exports = individualMovieShow;
