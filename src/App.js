import {useState} from "react";
import "./App.css";
import Films from "./Films";
import Casts from "./Casts";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [castClicked, setCastClicked] = useState(null);
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState();
  const isCastClicked = castClicked?.length > 0;

  function handleCastClick(e, film) {
    setCastClicked(film?.characters);
    setSelectedFilm(film?.title);
  }

  function handleSetFilms(filmData) {
    setFilms(filmData);
  }

  return (
    <>
      <Header/>
      <div>
        <div className="container">
          <div className="col-12">
            {isCastClicked ? (
              <Casts casts={castClicked} onBackClick={handleCastClick} films={films} selectedFilm={selectedFilm}/>
            ) : (
              <Films onCastClick={handleCastClick} onSetFilms={handleSetFilms} films={films}/>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;

// https://i.pravatar.cc/48?u=${id}
