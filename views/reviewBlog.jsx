const React = require('react')
const Default = require('./layouts/default')

function reviewBlog({reviews}){
const reviewDisplay = reviews.map(review=>{
  return(
    <div key={review._id}>
      <a href={`/reviews/${review._id}`}><h2>{review.title}</h2></a>
      <p>{review.comment}</p>
      <p>Made by {review.name} on {review.dateMade}</p>
      <a href={`/reviews/${review._id}`}></a>
      
    </div>
  )
})

return(
  <Default>
    <h1>Reviews</h1>
    {reviewDisplay}
  </Default>
)

}

module.exports= reviewBlog