import { useEffect, useState } from "react";
import Cast from "./Cast";
import Loading from "./Loading";
import Button from "./Button";

function Casts({ casts, onBackClcik }) {
  const [castsData, setcastsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const abortController = new AbortController();
    async function getCasts() {
      try {
        const response = await Promise.all(
          casts.map((url) => fetch(url, { signal: abortController.signal }))
        );
        const data = await Promise.all(response.map((res) => res.json()));
        console.log(data);
        setcastsData(data);
        setIsLoading(false);
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
    document.title = "Movie";
    return () => {
      document.title = "Star wars";
    };
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Button onClick={onBackClcik} data={null}>
        Go back
      </Button>
      <div className="row d-flex">
        {castsData.map((c, i) => (
          <Cast cast={c} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Casts;
