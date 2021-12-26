import React from "react";
import ReactDOM from "react-dom";
import Card from "./cards";
import "../src/index.css";
import sdata from "./seriesdata";

const map_of_sdata_to_cards = (value) => {
  return (
    <Card
      key={value.id}
      img={value.img}
      sname={value.sname}
      title={value.title}
      landing_link={value.landing_link}
    />
  );
};

ReactDOM.render(
  <>{sdata.map(map_of_sdata_to_cards)}</>,
  document.getElementById("root")
);
