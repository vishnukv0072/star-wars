import { useState } from "react";
import "./App.css";
import Films from "./Films";
import Casts from "./Casts";

function App() {
  const [castClicked, setCastClicked] = useState(null);
  const isCastClicked = castClicked?.length > 0;

  function handleCastClick(cast) {
    setCastClicked(cast);
  }

  return (
    <div className="container">
      <div className="col-12">
        {isCastClicked ? (
          <Casts casts={castClicked} />
        ) : (
          <Films onCastClick={handleCastClick} />
        )}
      </div>
    </div>
  );
}

export default App;
