function OtherMovies({cast, filmNameMap}) {
  return(
    <div className="col-12 row d-flex align-items-center p-3">
      {/*<ul className="other-movies">*/}
        {cast.films.map(f => <div className="col-4 other-movies pointer">{filmNameMap[f]}</div>)}
      {/*</ul>*/}
    </div>
  )
}

export default OtherMovies;