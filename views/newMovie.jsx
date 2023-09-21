const React = require('react')

function newMovie(){
return(
  <div>
    <h1>Add Movie</h1>
  <form action='/movies' method='POST'>
  <div className='form-group'>
  < label htmlFor= 'original_language'>Original Language</label><br></br>
  <input type='text' id='original_language' name='original_lanugage' />
  </div>
  <div className='form-group'>
  <label htmlFor= 'original_title'>Original Title</label><br></br>
  <input type='text' id='original_title' name='original_title' />
  </div>
  <div className='form-group'>
  <label htmlFor= 'overview'>Overview</label><br></br>
  <input type='text' id='overview' name='overview' />
  </div>
  <div className='form-group'>
  <label htmlFor= 'poster_path'>Poster path</label><br></br>
  <input type='text' id='poster_path' name='poster_path' />
  </div>
  <div className='form-group'>
  <label htmlFor= 'release_date'>Release Date</label><br></br>
  <input type='text' id='release_date' name='release_date' />
  </div>
 <input type='submit'></input>
</form>
</div>
)
}

module.exports = newMovie