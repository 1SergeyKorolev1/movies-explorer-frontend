import React from "react";
import "./Movies.css"
import SearchForm from "./movies/SearchForm.js";
import MoviesCardList from "./movies/MoviesCardList.js";
import More from "./movies/More.js";
 
function Movies() {

    function handleMovieSearchr(data) {
        console.log(data);
    }

  return (
    <>
    <section className="movies">
        <SearchForm onMovieSearchr={handleMovieSearchr} />
        <MoviesCardList />
        <More />
    </section>
    </>
  ); 
}

export default Movies; 