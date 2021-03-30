import React, { useState } from "react";
import Map from "./Map";
const Engine = () => {
  let [logbook, setLogbook] = useState(null);

  const sendIt = (e) => {
    let reader = new FileReader();
    e.preventDefault();
    reader.readAsText(e.target.files[0]);
    reader.onload = build;
  };

  const build = (e) => {
    let csv = e.target.result.split(/\r\n|\n/);
    console.log([...csv].filter((x) => x.includes("Flights Table")));
    for (var i of csv) {
      if (i.includes("Flights Table")) {

      }
    }
    setLogbook(csv);
  };
  const returnIt = () => {};

  return (
    <div className="engine">
      <Map />
      <form action="">
        <p>{logbook}</p>
        <input type="file" accept=".csv" onChange={sendIt} />
      </form>
    </div>
  );
};

export default Engine;
