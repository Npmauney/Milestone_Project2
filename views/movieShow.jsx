const React = require('react');
const Default = require('./layouts/default');
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//need to change the post controller to not redirect, just add to favorites after Star is clicked
//isFavorite should be a boolean to be used to store in favorites collection
//This still needs work! - AG
function individualMovieShow({ movie }) {
  return (
    <Default>
      <Container>
        <h3>{movie.original_title}</h3>
        <Row>
          <Col sm={8}> 
            <p>{new Date(movie.release_date).getFullYear()}</p>
            <p>{movie.overview}</p>
          </Col>
          <Col sm={4}> 
          
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
          </Col>
        </Row>
      </Container>
      <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>

      <form action={``} method='POST'>
        <div>
          <label>Add to Favorite:</label>
          <button className={`star-button ${movie.isFavorite ? 'clicked' : ''}`} type="submit" name="starButton">
            {movie.isFavorite ? '' : ''}
          </button>
        </div>
      </form>
    </Default>
  );
}

module.exports = individualMovieShow;

