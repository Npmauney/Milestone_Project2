const React = require('react')
const Default = require('./layouts/default')

function Show ({ baker }) {
    const breadDisplay = baker.breads.map(bread => {
        return (
            <li key={bread._id}>
                <a href={`/breads/${bread._id}`}>
                    {bread.name}
                </a>
            </li>
        )
    })
    return (
      <Default>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3>
          <ul>
            {breadDisplay}
          </ul>
          <form action={`/bakers/${baker._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>     
      </Default>
    )
}

module.exports = Show


// {
//   adult: false,
//   backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
//   id: 346698,
//   title: 'Barbie',
//   original_language: 'en',
//   original_title: 'Barbie',
//   overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
//   poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
//   media_type: 'movie',
//   genre_ids: [ 35, 12, 14 ],
//   popularity: 2160.191,
//   release_date: '2023-07-19',
//   video: false,
//   vote_average: 7.308,
//   vote_count: 4756
// }