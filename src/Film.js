import { useState } from "react";

function Film({ film, children }) {
  const [expandText, setExpandText] = useState(false);

  return (
    <div className="d-flex align-items-center film">
      <img src={`/images/star-wars-${film.episode_id}.jpg`} alt={film.title} />
      <div>
        <h3>{film.title}</h3>
        <p>
          {expandText
            ? film.opening_crawl
            : `${film.opening_crawl.split(" ").splice(0, 30).join(" ")}....`}
          <span
            className="text-primary"
            onClick={() => setExpandText((old) => !old)}
          >
            {expandText ? "Collapse" : "Expand"}
          </span>
        </p>
        {children}
      </div>
    </div>
  );
}

export default Film;
