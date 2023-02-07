import { moviesApi } from "../utils/MoviesApi.js";
import { mainApi } from "../utils/MainApi.js";

import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
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

  const currentCards = JSON.parse(localStorage.getItem('dataMovies'));
  const currentSearch = JSON.parse(localStorage.getItem('search'));
  const savedMoviesSearch = JSON.parse(localStorage.getItem('searchSave'));

  const [currentUser, setCurrentUser] = React.useState([]);
  // const [currentCards, setCurrentCards] = React.useState([]);
  const [currentSaveCards, setCurrentSaveCards] = React.useState([]);
  // const [currentSearch, setCurrentSearch] = React.useState("");
  // const [savedMoviesSearch, setSavedMoviesSearch] = React.useState("");
  const [updateTheData, setUpdateTheData] = React.useState(false);
  const [cardId, setCardId] = React.useState("");

  const history = useHistory();

  React.useEffect(() => {
    mainApi
      .initialDataProfile()
      .then((data) => {
        setCurrentUser(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  }, []);

  React.useEffect(() => {
    mainApi
      .initialMovieData()
      .then((data) => {
        setCurrentSaveCards(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  }, [updateTheData]);

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
      // setCurrentCards(data);
      // setCurrentSearch(dataMovies.name);
      localStorage.setItem('search', JSON.stringify(dataMovies.name));
      localStorage.setItem('dataMovies', JSON.stringify(data));
      window.location.reload();
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
 }

 function handleSaveMovieSearchr(dataMovies) {
    console.log(dataMovies.name);
    localStorage.setItem('searchSave', JSON.stringify(dataMovies.name));
    window.location.reload();
 }

 function handleCardSave(card, evt) {
   if(evt.target.className === "element__save") {
    mainApi
    .sendMovieData(card)
    .then((data) => {
      console.log(data);
      setCurrentSaveCards([...currentSaveCards, data]);
      evt.target.classList.remove("element__save");
      evt.target.classList.add("element__saved");
      evt.target.innerText = ""
      setCardId(data._id);
    })
    .catch((err) => {
      console.log(`Ошибка ${err} повторите запросс позже`);
    });
  } else {
    // console.log(card);
    mainApi
    .deleteMovie(cardId)
    .then((data) => {
      evt.target.classList.remove("element__saved");
      evt.target.classList.add("element__save");
      evt.target.innerText = "Сохранить"
    })
    .catch((err) => {
      console.log(`Ошибка ${err} повторите запросс позже`);
    });
  }
 }

 function handleCardDelete(card, evt) {
   if (card._id === undefined) {
    // console.log(card);
    currentSaveCards.map((cardSave) => {
      if(cardSave.nameRU === card.nameRU && cardSave.owner === currentUser._id) {
        if(evt.target.className === "element__save") {
          mainApi
          .sendMovieData(card)
          .then((data) => {
            evt.target.classList.remove("element__save");
            evt.target.classList.add("element__saved");
            evt.target.innerText = ""
            mainApi
            .initialMovieData()
            .then((dataMovie) => {
              setCurrentSaveCards(dataMovie);
             })
            .catch((err) => {
              console.log(`Ошибка ${err} повторите запросс позже`);
            });
          })
          .catch((err) => {
            console.log(`Ошибка ${err} повторите запросс позже`);
          });
        } else {
          mainApi
            .deleteMovie(cardSave._id)
            .then((data) => {
              evt.target.classList.remove("element__saved");
              evt.target.classList.add("element__save");
              evt.target.innerText = "Сохранить"
            })
            .catch((err) => {
              console.log(`Ошибка ${err} повторите запросс позже`);
            });
        }
      }
    })
  } else {
    mainApi
      .deleteMovie(card._id)
      .then((data) => {
        const index = currentSaveCards.findIndex(n => n._id === data._id);
        if (index !== -1) {
          currentSaveCards.splice(index);
          setUpdateTheData(!updateTheData);
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err} повторите запросс позже`);
      });
  }
 }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
              onCardSave={handleCardSave}
              cardsDataSave={currentSaveCards}
              onCardDelete={handleCardDelete}
              />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header />
              <Main
              searchSavedData={savedMoviesSearch}
              cardsDataSave={currentSaveCards}
              onSaveMovieSearchr={handleSaveMovieSearchr}
              onCardDelete={handleCardDelete}
              />
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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
