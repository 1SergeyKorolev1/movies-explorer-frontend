import React from "react";
import "./MoviesCard.css"
import MovieCardImage from "../../images/MovieCard-1.jpg"
import MovieCardSaved from "../../images/MovieCardSaved.svg"

function MoviesCard({ onCheck }) {

  function random() {
    return Math.random();
  }
  
  const buttonType = `${random() > 0.5 ? "element__save" : "element__saved"}`;
  const buttonContent = `${buttonType === "element__saved" || onCheck === true ? "" : "сохранить"}`;

  return (
    <div className="element">  
      <div className="element__group">
        <h2 className="element__title">В Погоне за Бэнкси </h2>
        <p className="element__time">27 минут</p>
      </div>  
      <img
        className="element__img"
        src={MovieCardImage}
        alt="???"
      />
      <button type="button" className={`${onCheck ? "element__delete" : buttonType}`}>{buttonContent}</button>
    </div>
  );
}

export default MoviesCard;