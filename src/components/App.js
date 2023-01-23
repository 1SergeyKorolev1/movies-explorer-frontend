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
            <Main />
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
