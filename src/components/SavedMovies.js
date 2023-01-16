import React from "react";
import "./SavedMovies.css"
import MoviesCardList from "./movies/MoviesCardList.js";
import SearchForm from "./movies/SearchForm.js";
 
function SavedMovies() {

  function handleMovieSearchr(data) {
    console.log(data);
}

  const check = true;

  return (
    <section className="saved-movies">
      <SearchForm onMovieSearchr={handleMovieSearchr} />
      <MoviesCardList checked={check} />
    </section>
  ); 
}

export default SavedMovies; 