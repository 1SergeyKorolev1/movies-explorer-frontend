import { moviesApi } from "../utils/MoviesApi.js";

import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from "./Header.js";
import Main from "./Main.js";
import Movies from './Movies.js';
import SavedMovies from "./SavedMovies.js"
import Register from './Register.js';
import Login from "./Login.js"
import Profile from './Profile.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';

function App() {

  const [currentCards, setCurrentCards] = React.useState([]);
  const [currentSearch, setCurrentSearch] = React.useState("");

  // console.log(currentSearch);

  const history = useHistory();

  function handleAddUser(data) {
    console.log(data);
  }

  function handleAuthorizedUser(data) {
    console.log(data);
    history.push("/movies");
  }

  function handleDataChangeUser(data) {
    console.log(data);
  }

  function handleMovieSearchr(dataMovies) {
    // console.log(currentSearch);
    moviesApi
    .initialCardsData()
    .then((data) => {
      // console.log(data);
      setCurrentCards(data);
      setCurrentSearch(dataMovies.name);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
 }

  return (
    <>
      <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header />
            <Main 
            onMovieSearch={handleMovieSearchr}
            cardsData={currentCards}
            searchData={currentSearch}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <Main handleDataChangeUser={handleDataChangeUser} />
          </Route>
          <Route path="/signup">
            <Register onAddUser={handleAddUser} />
          </Route>
          <Route path="/signin">
            <Login onAuthorizedUser={handleAuthorizedUser} />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
      </Switch>
    </>
  );
}

export default App;
