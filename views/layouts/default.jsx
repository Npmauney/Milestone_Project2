const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body>
      <div className="wrapper">
        <header className='banner'>
          <h1><a href="/movies">Imago Vocis</a></h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/movies">Home</a>
        <a className="nav-link" href="/movies/new">Create Movie</a>
        <a className="nav-link" href="#">Trending Movies</a>
        <a className="nav-link" href="/movies/favorites">Personal Favorites</a>
      </div>
    </div>
  </div>
</nav>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>

    </html>
  )
}

module.exports = Default

