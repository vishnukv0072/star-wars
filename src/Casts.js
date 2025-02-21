import { useEffect, useState } from "react";

function Casts({ casts }) {
  const [castsData, setcastsData] = useState([]);

  useEffect(function () {
    const abortController = new AbortController();
    async function getCasts() {
      try {
        // const response = await fetch("", { signal: abortController.signal });
        const response = await Promise.all(
          casts.map((url) => fetch(url, { signal: abortController.signal }))
        );
        const data = await Promise.all(response.map((res) => res));
        debugger;
        console.log(casts);
        //   setcastsData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
        }
      }
    }
    getCasts();
    return () => abortController.abort();
  }, []);
}

export default Casts;
