const React = require('react')
const Default = require('./layouts/default')

function individualMovieShow ({ review }) {

    return (
      <Default>
          <h1>{review.title}</h1>
          <h1>{review.name}</h1>
          <p> {review.comment}</p>
          <p><span>Made on {review.dateMade}</span></p>
          <form action={`/reviews/${review._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
          <a href={`/reviews/${review._id}/edit`}>
          <button>Edit</button>
          </a>     
      </Default>
    )
}

module.exports = individualMovieShow