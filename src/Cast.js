import {useState} from "react";
import About from "./About";
import Vehicles from "./Vehicles";
import OtherMovies from "./OtherMovies";
import Button from "./Button";

function Cast({cast, worlds, filmNameMap}) {
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(1);
  const id = cast.name + cast.birth_year;

  function handleSelection(e) {
    if (["IMG", "BUTTON"].includes(e.target.tagName)) {
      console.log(id);
      setSelected((old) => {
        return !old;
      });
    }
  }

  function handleActiveTab(e, d) {
    setActive(e.target.value);
  }


  return (<div className="col-12 d-flex justify-content-between p-3 mb-2 border border-1 border-black"
               onClick={(e) => handleSelection(e)}>
    <div className="col-2">
      <img src={`https://i.pravatar.cc/48?u=${cast.name}`} alt={cast.name} style={{width: "100%"}} className="pointer"/>
      {/*<img src={`https://picsum.photos/seed/${cast.name}1/200/300`} alt={cast.name} style={{width: "100%"}} className="pointer"/>*/}
      {selected && <h3 className="text-center">{cast.name}</h3>}
    </div>
    <div className={`col-8 ${selected ? '' : 'd-flex align-items-center'}`}>
      {selected ? (<>
        <ul className="tab" onClick={handleActiveTab}>
          <li className={active === 1 ? 'tab-active' : ""} value={1}>About</li>
          <li className={active === 2 ? 'tab-active' : ""} value={2}>Movies appearing</li>
          <li className={active === 3 ? 'tab-active' : ""} value={3}>Vehicles</li>
        </ul>
        {active === 1 && <About cast={cast} worlds={worlds}/>}
        {active === 2 && <OtherMovies cast={cast} filmNameMap={filmNameMap}/> }
        {active === 3 && <Vehicles cast={cast}/>}
        <Button onClick={() => handleSelection} data={null}>Close</Button>
      </>) : (<div>
        <h1>{cast.name} from {worlds[cast.homeworld]}</h1>
        <Button onClick={() => handleSelection} data={null}>Explore</Button>
      </div>)}
    </div>
  </div>);
}

export default Cast;
