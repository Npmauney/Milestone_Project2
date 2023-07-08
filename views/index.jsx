const React = require('react')
const Default = require('./layouts/default')
const { link } = require('../controllers/bread')

function Index ({ breads }) {
    const breadDisplay = breads.map((bread,i) => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers)
            <li key={i}>
                <a href={`/breads/${i}`}>
                    {bread.name}
                </a>
            </li>
        )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {breadDisplay}
        </ul>
      </Default>
    )
}

module.exports = Index