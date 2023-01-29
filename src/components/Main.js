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
 
function Main({ handleDataChangeUser, onMovieSearch, cardsData, searchData }) {
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
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile onDataChangeUser={handleDataChangeUser} />
          </Route>
      </Switch>
    </main>
  ); 
}

export default Main; 