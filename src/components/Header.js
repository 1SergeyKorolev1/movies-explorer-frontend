import React from "react"; 
import "./Header.css"
import HeaderWhite from "./header/HeaderWhite.js";
import HeaderBlue from "./header/HeaderBlue.js";
import { Route, Routes, useHistory, Switch, Link } from 'react-router-dom';

 
function Header() { 

  return (
      <Switch>
        <Route path="/movies">
          <HeaderWhite />
        </Route>
        <Route path="/saved-movies">
          <HeaderWhite />
        </Route>
        <Route path="/profile">
          <HeaderWhite />
        </Route>
        <Route path="/">
          <HeaderBlue />
        </Route>
      </Switch>
  ); 
} 
 
export default Header;