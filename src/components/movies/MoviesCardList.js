import React from "react";
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css"
import Card from "./MoviesCard.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function MoviesCardList({ checked, cardsData, searchData, checkboxState, onCardSave, cardsDataSave, searchSavedData, onCardDelete }) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  window.onload = function() {
    const checkboxSearch = document.getElementById('checkbox-search');
    if(JSON.parse(localStorage.getItem('checking')) === true) {
      checkboxSearch.checked = true;
    } else {
      checkboxSearch.checked = false;
    }
 };

 function replaceSaveSerchText() {
  if(searchSavedData === null) {
    return ""
  } else {
    return searchSavedData
  }
 }

 const searchSavedDataText = replaceSaveSerchText();

 function replaceSerchText() {
  if(searchData === null) {
    return ""
  } else {
    return searchData
  };
 }

 const serchDataText = replaceSerchText();

  if (location.pathname === '/movies' && cardsData !== null) {
    return (
        <ul className="elements">
            {cardsData.map((card) => {
              const arrayChekButtonClass = cardsDataSave.map((cardSave) => {
                const saveButtonClassCheck = (card.nameRU === cardSave.nameRU && cardSave.owner === currentUser._id);
                return saveButtonClassCheck;
              });
              const chekButtonClass = (arrayChekButtonClass.includes(true));
              let serchText = serchDataText.toLowerCase(); 
              let cardText = card.nameRU.toLowerCase();
              if (cardText.includes(serchText.slice(0,2))
               || cardText.includes(serchText)
               || cardText.includes(serchText.slice(1,3))
               ) {
                if(checkboxState) {
                  if(card.duration <= 40) {
                    return (
                      <Card
                        card={card}
                        onCheck={checked}
                        onCardSave={onCardSave}
                        chekButtonClass={chekButtonClass}
                        onCardDelete={onCardDelete}
                      />
                      )
                  }
                } else {
                  return (
                    <Card
                      card={card}
                      onCheck={checked}
                      onCardSave={onCardSave}
                      chekButtonClass={chekButtonClass}
                      onCardDelete={onCardDelete}
                    />
                    )
                }
                }
             }
            )}
        </ul>
    );
  } else if (location.pathname === '/saved-movies') {
    return (
      <ul className="elements">
          {cardsDataSave.map((card) => {
            if (card.owner === currentUser._id) {
              let serchText = searchSavedDataText.toLowerCase();
              let cardText = card.nameRU.toLowerCase();
              if (cardText.includes(serchText.slice(0,2))
               || cardText.includes(serchText)
               || cardText.includes(serchText.slice(1,3))
               ) {
                    if(checkboxState) {
                      if(card.duration <= 40) {
                        return (
                          <Card
                      card={card}
                      onCheck={checked}
                      onCardDelete={onCardDelete}
                    />
                          )
                      }
                    } else {
                      return (
                        <Card
                      card={card}
                      onCheck={checked}
                      onCardDelete={onCardDelete}
                    />
                        )
                    }
                }
            }
           }
          )}
      </ul>
    );
  }
}

export default MoviesCardList;