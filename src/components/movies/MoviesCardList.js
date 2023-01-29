import React from "react";
import "./MoviesCardList.css"
import Card from "./MoviesCard.js";

function MoviesCardList({ checked, cardsData, searchData }) {

  return (
      <ul className="elements">
          {cardsData.map((card) => {
            let serchText = searchData.toLowerCase(); 
            let cardText = card.nameRU.toLowerCase();
            if (cardText.includes(serchText.slice(0,2)) || cardText.includes(serchText) || cardText.includes(serchText.slice(1,3))) {
              return (
                <Card
                  card={card}
                   onCheck={checked}
                />
                )
              }
           }
          )}
      </ul>
  );
}

export default MoviesCardList;