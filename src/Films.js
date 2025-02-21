import {useEffect, useState} from "react";
import Film from "./Film";

export default function Films() {
    const [films, setFilms] = useState([]);

    useEffect(
        function () {
            const abortController = new AbortController();

            async function fetchFilms() {
                try {
                    const response = await fetch("https://swapi.dev/api/films", {signal: abortController.signal});
                    if (!response.ok) throw new Error("Something went wrong");
                    const data = await response.json();
                    setFilms(data.results);
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.log(err.message);
                    }
                }

            }

            fetchFilms();
            return () => {
                abortController.abort()
            };
        },
        []
    );

    return (
        <div className="col-12">
            {films.map((film, index) => (
                <Film film={film} key={index}/>
            ))}
        </div>
    );
}

// https://i.pravatar.cc/48?u=${id}