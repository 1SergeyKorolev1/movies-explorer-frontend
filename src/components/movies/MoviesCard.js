import React from "react";
import "./MoviesCard.css"
import MovieCardImage from "../../images/MovieCard-1.jpg"
import MovieCardSaved from "../../images/MovieCardSaved.svg"

function MoviesCard({ onCheck, card }) {

  function handleImageClick() {
    window.open(card.trailerLink, '_blank');
  }

  function random() {
    return Math.random();
  }
  
  const buttonType = `${random() > 0.5 ? "element__save" : "element__saved"}`;
  const buttonContent = `${buttonType === "element__saved" || onCheck === true ? "" : "сохранить"}`;

  return (
    <li className="element">  
      <div className="element__group">
        <h2 className="element__title">{card.nameRU}</h2>
        <p className="element__time">{card.duration} мин.</p>
      </div>  
      <img
        className="element__img"
        src={`https://api.nomoreparties.co${card.image.url}`}
        alt="???"
        onClick={handleImageClick}
      />
      <button type="button" className={`${onCheck ? "element__delete" : buttonType}`}>{buttonContent}</button>
    </li>
  );
}

export default MoviesCard;