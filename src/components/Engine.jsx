import Coords from "../tools/Coords";
import React from "react";
import Map from "./Map";
const Engine = ({ logbook, setLogbook }) => {
  const sendIt = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = build;
  };

  const build = (e) => {
    let csv = e.target.result.split(/\r\n|\n/);
    const start = () => {
      for (var i of csv) {
        if (i.includes("Flights Table")) return csv.indexOf(i);
      }
    };
    for (let i = start() + 2; i < csv.length; i++) {
      let obj = {};
      for (let k = 0; k < csv[start() + 1].split(",").length; k++) {
        obj[csv[start() + 1].split(",")[k]] = csv[i].split(",")[k];
      }
      setLogbook(logbook.push(obj));
    }
    setLogbook(
      logbook.forEach(
        (x) => (x.Route = Boolean(x.Route) ? x.Route.split(" ") : x.Route)
      )
    );
    setLogbook(
      logbook.forEach(
        (x) => (x.From = Boolean(x.From) ? Coords(x.From) : x.From)
      )
    );

    console.log(logbook);
  };

  return (
    <div className="engine">
      <Map />
      <form action="">
        <input type="file" accept=".csv" onChange={sendIt} />
      </form>
    </div>
  );
};

export default Engine;
