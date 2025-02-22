import { useEffect, useState } from "react";
import Film from "./Film";
import Button from "./Button";
import { default as React } from "react";
import Loading from "./Loading";

export default function Films({ onCastClick }) {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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

  return isLoading ? (
    <Loading />
  ) : (
    <div className="col-12" onClick={() => {}}>
      {films.map((film) => (
        <React.Fragment key={film.episode_id}>
          <Film film={film}>
            <Button onClick={onCastClick} data={film}>
              Cast
            </Button>
          </Film>
        </React.Fragment>
      ))}
    </div>
  );
}
