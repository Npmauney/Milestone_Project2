const React = require('react')

function newMovie(){
return(
 <div>
  <h1>Add a new movie</h1>
  <form action='/movies' method='POST'>
  <label htmlFor= 'original_language'>Original Language</label><br></br>
  <input type='text' id='original_language' name='original_lanugage'></input>
  <label htmlFor= 'original_title'>Original Title</label><br></br>
  <input type='text' id='original_title' name='original_title'></input>
  <label htmlFor= 'overview'>Overview</label><br></br>
  <input type='text' id='overview' name='overview'></input>
  <label htmlFor= 'poster_path'>Poster path</label><br></br>
  <input type='text' id='poster_path' name='poster_path'></input>
  <label htmlFor= 'release_date'>Release Date</label><br></br>
  <input type='text' id='release_date' name='release_date'></input>
  <input type='submit'></input>
</form>
 </div>
)

}

module.exports = newMovie