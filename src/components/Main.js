import React from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import "./Main.css";
import Promo from "./main/Promo.js";
import AboutProject from "./main/AboutProject.js";
import Techs from "./main/Techs.js";
import AboutMe from "./main/AboutMe.js";
import Portfoli from "./main/Portfolio.js";
import Movies from './Movies.js';
import SavedMovies from "./SavedMovies.js";
import Profile from './Profile.js';
 
function Main({ handleDataChangeUser, onMovieSearch, cardsData, searchData, onCardSave, cardsDataSave, onSaveMovieSearchr, searchSavedData, onCardDelete }) {
  let cards = 6;

  function handleMoreClick() {
    cards += 3;
    const arrayVisCards = Array.from(document.querySelector(".elements").children);
    const visCards = arrayVisCards.slice(0, cards);
    // console.log(arrayVisCards.length);

    visCards.forEach(el => el.classList.add("visible"));

    if(visCards.length === arrayVisCards.length || arrayVisCards.length === 0) {
      document.querySelector(".more-title").style.display = "none";
    }
  }

  return (
    <main className="content">
      <Switch>
          <Route exact path="/">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfoli />
          </Route>
          <Route path="/movies">
            <Movies 
            onMovieSearch={onMovieSearch}
            cardsData={cardsData}
            searchData={searchData}
            onCardSave={onCardSave}
            handleMoreClick={handleMoreClick}
            cardsDataSave={cardsDataSave}
            onCardDelete={onCardDelete}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies
            cardsDataSave={cardsDataSave}
            onSaveMovieSearchr={onSaveMovieSearchr}
            searchSavedData={searchSavedData}
            handleMoreClick={handleMoreClick}
            onCardDelete={onCardDelete}
            />
          </Route>
          <Route path="/profile">
            <Profile onDataChangeUser={handleDataChangeUser} />
          </Route>
      </Switch>
    </main>
  ); 
}

export default Main; 