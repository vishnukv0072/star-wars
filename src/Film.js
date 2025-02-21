export default function Film({film}) {
    debugger
    return (
        <div className="d-flex align-items-center film">
            <img src={`/images/star-wars-${film.episode_id}.jpg`}  />
            <h3>{film.title}</h3>
        </div>
    )
}

// {`/public/star-wars-${film.episode_id}.jpg`}