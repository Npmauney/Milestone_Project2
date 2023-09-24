const React = require('react')
const Default = require('./layouts/default')

function editReview({review}){
return(
  <div>
  <Default>
    <h1>Edit Review</h1>
  <form action={`/reviews/${review._id}?_method=PUT`} method='POST'>
  <div className='form-group newInput'>
  < label htmlFor= 'title'>Title</label><br></br>
  <input type='text' id='title' name='title' defaultValue={review.title} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'name'>Name</label><br></br>
  <input type='text' id='name' name='name' defaultValue={review.name} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'comment'>Comment</label><br></br>
  <input type='text' id='comment' name='comment' defaultValue={review.comment} />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'dateMade'>DateMade</label><br></br>
  <input type='text' id='dateMade' name='dateMade' defaultValue={review.dateMade} />
  </div>
 <input type='submit'></input>
</form>
</Default>
</div>

)
}

module.exports = editReview