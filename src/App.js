import { useState } from "react";
import "./App.css";
import Films from "./Films";
import Casts from "./Casts";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [castClicked, setCastClicked] = useState(null);
  const isCastClicked = castClicked?.length > 0;

  function handleCastClick(film) {
    setCastClicked(film?.characters);
  }

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className="col-12">
            {isCastClicked ? (
              <Casts casts={castClicked} onBackClcik={handleCastClick} />
            ) : (
              <Films onCastClick={handleCastClick} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

// https://i.pravatar.cc/48?u=${id}
