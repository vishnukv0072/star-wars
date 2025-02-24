import {useEffect, useState} from "react";
import Cast from "./Cast";
import Loading from "./Loading";
import Button from "./Button";

function Casts({casts, onBackClick, films, selectedFilm}) {
  const [castsData, setCastsData] = useState([]);
  const [worlds, setWorlds] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const filmNameMap = Object.fromEntries(films.map(f => [f.url, f.title]));

  useEffect(function () {
    const abortController = new AbortController();

    async function getCasts() {
      try {
        const response = await Promise.all(casts.map((url) => fetch(url, {signal: abortController.signal})));
        const data = await Promise.all(response.map((res) => res.json()));
        console.log(data);
        setCastsData(data);
        setIsLoading(false);
        const worldsData = await Promise.all(data.map(el => fetch(el.homeworld, {signal: abortController.signal})));
        for (let i = 0; i < worldsData.length; i++) {
          const res = await worldsData[i].json();
          setWorlds(w => ({...w, [data[i].homeworld]: res.name}))
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    }

    getCasts();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (selectedFilm) {
      document.title = selectedFilm;
    }
    return () => {
      document.title = "Star wars";
    };
  }, [selectedFilm]);

  return isLoading ? (<Loading/>) : (<div className="pt-20">
    <Button onClick={onBackClick} data={null}>
      Go back
    </Button>
    <div className="row d-flex pt-20">
      {castsData.map((c, i) => (<Cast cast={c} key={i} worlds={worlds} filmNameMap={filmNameMap}/>))}
    </div>
  </div>);
}

export default Casts;
