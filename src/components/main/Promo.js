import React from "react";
import "./Promo.css"
import PromoLogo from "../../images/World_King_Movie_Promo_image.svg"
 
function Promo() {
  return (
      <section className="promo">
        <h1 className="promo_title">Учебный&nbsp;проект&nbsp;студента факультета Веб&#8209;разработки.</h1>
        <p className="promo_subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo_link" href="#">Узнать больше</a>
        <img className="promo_logo" src={PromoLogo}></img>
      </section>
  ); 
}

export default Promo; 