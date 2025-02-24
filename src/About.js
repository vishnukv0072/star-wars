function About({cast, worlds}) {
  return (
    <div className="py-3">
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Home world</div>
        <div className="col-6 home-world" onClick={() => console.log(cast.homeworld)}>{worlds[cast.homeworld]}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Birth year</div>
        <div className="col-6">{cast.birth_year}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Gender</div>
        <div className="col-6">{cast.gender}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Height</div>
        <div className="col-6">{cast.height}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Mass</div>
        <div className="col-6">{cast.mass}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Eye color</div>
        <div className="col-6">{cast.eye_color}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Hair color</div>
        <div className="col-6">{cast.hair_color}</div>
      </div>
      <div className="col-12 d-flex py-1">
        <div className="col-6 fw-bold">Skin color</div>
        <div className="col-6">{cast.skin_color}</div>
      </div>
    </div>
  )
}

export default About;