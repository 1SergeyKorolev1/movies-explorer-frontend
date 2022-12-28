import React from "react"; 
import "./Header.css"
import logoKingMovie from "../images/logo_King_Movie.svg"; 
 
function Header() { 
  return ( 
    <header className="header"> 
    <div className="header__container">
      <img 
        src={logoKingMovie} 
        className="header__logo" 
        alt="лого-King-Movie" 
        title="лого-King-Movie" 
      /> 
    </div>
    </header> 
  ); 
} 
 
export default Header;