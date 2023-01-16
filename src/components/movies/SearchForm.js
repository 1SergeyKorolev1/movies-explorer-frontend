import React from "react";
import "./SearchForm.css"

function SearchForm({ onMovieSearchr }) {
  const [movieName, setMovieName] = React.useState("");

  function onChangeMovieName(evt) {
    setMovieName(evt.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onMovieSearchr({
      name: movieName,
    });

    setMovieName("");

  };

  return (
      <form onSubmit={handleSubmit} className="search">
        <div className="search__wrapper">
            <input
                className="search__text"
                id="movie-text"
                required
                name="movie-name"
                type="text"
                placeholder="Фильм"
                value={movieName}
                onChange={onChangeMovieName}
            />
            <button type="submit" className="search__link">
                 Найти
            </button>
        </div>
        <label className="checkbox-wrapper">
            <input type="checkbox" class="invisible-checkbox" />
            <span class="visible-checkbox">
                <span className="visible-checkbox__radio"></span>
            </span>
            <span className="checkbox__text">Короткометражки</span>
        </label>       
      </form>
  );
}

export default SearchForm;