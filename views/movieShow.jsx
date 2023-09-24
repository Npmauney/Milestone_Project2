const React = require('react');
const Default = require('./layouts/default');
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//     return (
//       <Default>
//           <h3>{movie.original_title}</h3>
//           <h4>{movie.original_language}</h4>
//           <img src={movie.poster_path}></img>
//           <p>{movie.release_date.getFullYear()}</p>
//           <p>{movie.overview}</p>
//           <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
//             <input type="submit" value="DELETE"/>
//           </form>
//           <a href={`/movies/${movie._id}/edit`}>
//           <button>Edit</button>
//           </a>     
//       </Default>
//     )

//need to change the post controller to not redirect, just add to favorites after Star is clicked
//isFavorite should be a boolean to be used to store in favorites collection
//This still needs work! - AG

//This needs to be added to incorporate bootstrap but it messes with the navbar, still need to figure it out (temporartily removed)
/*<html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      </html>
      */
function individualMovieShow({ movie }) {
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
    <Default>
      <Container className='blockspace'>
        <Row>
          <Col sm={8}> 
            <h3>{movie.original_title}</h3>
            <p>{new Date(movie.release_date).getFullYear()}</p>
            <p>{movie.overview}</p>
          </Col>
          <Col sm={4}> 
          
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
          </Col>
        </Row>
        <Row>
          <Col>
            <form action={`/movies/${movie._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete Movie" />
            </form>
          </Col>
          <Col>
            <form action={`/movies/favorites`} method='POST'>
              <div>
                <button className={`star-button ${movie.isFavorite ? 'clicked' : ''}`} type="submit" name="starButton">
                  {movie.isFavorite ? '' : ''}
                </button>
              </div>
            </form>
          </Col>
      </Row>
      </Container>
      
    </Default>
    </html>
  );
}
module.exports = individualMovieShow;

