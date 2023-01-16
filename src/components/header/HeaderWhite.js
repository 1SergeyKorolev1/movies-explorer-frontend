import React from "react"; 
import "./HeaderWhite.css"
import "../Header.css"
import logoKingMovie from "../../images/logo_King_Movie.svg";
import headerMenu from "../../images/headerMenu.svg"
import Cross from "../../images/Krestic.svg"
import { Route, Routes, useHistory, Switch, Link, useLocation } from 'react-router-dom';

 
function HeaderWhite() { 

  const location = useLocation();
  const history = useHistory();
  
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  
  const [menuOpened, setMenuOpened] = React.useState(undefined);
  const [menuClick, setMenuClick] = React.useState(false);

  // console.log(windowSize, menuOpened);

  const goHome = () => {
    history.push("/");
  }

  React.useEffect(() => {

    function changeOfSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (windowSize.width > 768) {
      setMenuOpened(false);
    } else if (windowSize.width < 768) {
      setMenuOpened(true);
    }

    window.addEventListener('resize', changeOfSize);

    changeOfSize();

    return () => window.removeEventListener('resize', changeOfSize);

  }, [windowSize.width, location]);

  function handleMenuClick() {
    setMenuClick(!menuClick);
    console.log(menuClick);
  }

  return ( 
    <header className="header">
      {menuClick && (
        <>
          <div className="header__menu-overlay">
          </div>
          <div className="header__menu">
            <img
            onClick={handleMenuClick}
            src={Cross}
            className="header__cross" 
            alt="лого-крестик" 
            title="Закрыть"
            /> 
            <nav className="header__links-menu">
              <Link onClick={handleMenuClick} to="/" className="header__link-menu">Главная</Link>
              <Link onClick={handleMenuClick} to="/movies" className={`header__link-menu ${
                    location.pathname === '/movies'
                    ? 'header__link-menu_active'
                    : ''
                }`}>Фильмы</Link>
              <Link onClick={handleMenuClick} to="/saved-movies" className={`header__link-menu ${
                    location.pathname === '/saved-movies'
                    ? 'header__link-menu_active'
                    : ''
                }`}>Сохраненные Фильмы</Link>
            </nav>
            <Link onClick={handleMenuClick} to="/profile" className={`header__link-profile ${
                  location.pathname === '/profile'
                  ? 'header__link-menu_active'
                  : ''
              }`}>Аккаунт</Link>
          </div>
        </>
      )}
      <div className="header__container white-container">
          <img
          onClick={goHome}
          src={logoKingMovie}
          className="header__logo" 
          alt="лого-King-Movie" 
          title="лого-King-Movie"
          />           
          <div className="header__wrapper">
            <nav className="header__wrapper-link">
              {!menuOpened && (
                <>
                  <Link to="/movies" className="header__link-films">Фильмы</Link>
                  <Link to="/saved-movies" className="header__link-films_save">Сохраненные Фильмы</Link>
                </>
              )}
            </nav>
            {!menuOpened ? (
              <Link to="/profile" className="header__link-profile">Аккаунт</Link>
            ) : (
              <img
                onClick={handleMenuClick}
                src={headerMenu}
                className="header__menu-logo" 
                alt="лого-меню" 
                title="открыть выпадающее меню"
              />
            )}
          </div>
      </div>
    </header>
  ); 
} 
 
export default HeaderWhite;