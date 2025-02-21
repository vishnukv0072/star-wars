import { useEffect, useState } from "react";
import Film from "./Film";
import Button from "./Button";
import { default as React } from "react";

export default function Films({ onCastClick }) {
  const [films, setFilms] = useState([]);

  useEffect(function () {
    const abortController = new AbortController();

    async function fetchFilms() {
      try {
        const response = await fetch("https://swapi.dev/api/films", {
          signal: abortController.signal,
        });
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        const sorted = data.results
          .slice()
          .sort((a, b) => a.episode_id - b.episode_id);
        setFilms(sorted);
        console.log(sorted);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    }

    fetchFilms();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="col-12" onClick={() => {}}>
      {films.map((film) => (
        <React.Fragment key={film.episode_id}>
          <Film film={film}>
            <Button onClick={onCastClick} data={film.characters}>
              Cast
            </Button>
          </Film>
        </React.Fragment>
      ))}
    </div>
  );
}

// https://i.pravatar.cc/48?u=${id}
