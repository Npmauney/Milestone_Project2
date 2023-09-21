const React = require('react')
const Default = require('./layouts/default')

//breads is the name of the array of objects
function Index ({ movies }) {
    const movieDisplay = movies.map((movie) => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
            <div id='display' key={movie._id}>
                <a href={`/movies/${movie._id}`}>
                    {movie.original_title}
                </a>
            </div>
        )
    })

    // const bakerDisplay = bakers.map(baker => {
    //     return (
    //         <li key={baker._id}>
    //             <a href={`/bakers/${baker._id}`}>
    //                 {baker.name}
    //             </a>
    //         </li>
    //     )
    // })

    return (
      <Default>
        <h2>Movies</h2>
    <div>
    {movieDisplay}
    </div>
      </Default>
    )
}

module.exports = Index