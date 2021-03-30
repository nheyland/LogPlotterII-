import Banner from './components/Banner';
import Info from './components/Info'
import Engine from './components/Engine'
import React, { useState } from 'react'


function App() {
  let [logbook, setLogbook] = useState([]);
  return (
    <div className="App">
      <Banner />
      <Info logbook={logbook} setLogbook={setLogbook} />
      <Engine logbook={logbook} setLogbook={setLogbook} />
    </div>
  );
}

export default App;
