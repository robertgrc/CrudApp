import React from "react";
// import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SelectAnidados from "./components/SelectAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>Ejercicios con React</h1>
      <hr />

      <SelectAnidados />
      <hr />
      <SongSearch />
      {/* <CrudApi /> */}
      <CrudApp />
    </div>
  );
}

export default App;
