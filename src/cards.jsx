import React from "react";

const Card = (props) => {
  return (
    <div className="cards_main">
      <div className="card">
        <img src={props.img} alt="movie-pic" className="card_img" />
        <div className="card_info">
          <p className="card_title"> {props.sname}</p>
          <p className="card_category"> {props.title} </p>
          <a href={props.landing_link} target="_blank">
            <button className="btn"> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
