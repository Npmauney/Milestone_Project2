const React = require('react')
const Default = require('./layouts/default')

function editMovieForm({movie}){

return(
  <div>
    <Default>
    <h1>Edit Movie</h1>
  <form action={`/movies/${movie._id}?_method=PUT`} method='POST'>
  <div className='form-group editInput'>
  < label htmlFor= 'original_language'>Original Language</label><br></br>
  <input type='text' id='original_language' name='original_language' defaultValue={movie.original_language} />
  </div>
  <div className='form-group editInput'>
  <label htmlFor= 'original_title'>Original Title</label><br></br>
  <input type='text' id='original_title' name='original_title' defaultValue={movie.original_title} />
  </div>
  <div className='form-group editInput'>
  <label htmlFor= 'overview'>Overview</label><br></br>
  <input type='text' id='overview' name='overview' defaultValue={movie.overview} />
  </div>
  <div className='form-group editInput'>
  <label htmlFor= 'poster_path'>Poster path</label><br></br>
  <input type='text' id='poster_path' name='poster_path' defaultValue={movie.poster_path} />
  </div>
  <div className='form-group editInput'>
  <label htmlFor= 'release_date'>Release Date</label><br></br>
  <input type='text' id='release_date' name='release_date' defaultValue={movie.release_date} />
  </div>
 <input type='submit'></input>
</form>
</Default>
</div>
)
}
module.exports= editMovieForm

