const React = require('react')
const Default = require('./layouts/default')
//Current date object info From google search how to get the current date in javascript
let today = new Date()
let day = String(today.getDate()).padStart(2, '0')
let month = String(today.getMonth()+1).padStart(2, '0')
let fullYear = today.getFullYear()

//how to get current time in javascript from Google search
let time = new Date()
let currentTime = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds()

today= `${month}/${day}/${fullYear} at ${currentTime}`
console.log(today)
function newReview(){
return(
  <div>
  <Default>
    <h1>Add Review</h1>
  <form action='/reviews' method='POST'>
  <div className='form-group newInput'>
  < label htmlFor= 'title'>Title</label><br></br>
  <input type='text' id='title' name='title' />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'name'>Name</label><br></br>
  <input type='text' id='name' name='name' />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'comment'>Comment</label><br></br>
  <input type='text' id='comment' name='comment' />
  </div>
  <div className='form-group newInput'>
  < label htmlFor= 'dateMade'>DateMade</label><br></br>
  <input type='text' id='dateMade' name='dateMade' value={today} />
  </div>
 <input type='submit'></input>
</form>
</Default>
</div>

)
}

module.exports = newReview
