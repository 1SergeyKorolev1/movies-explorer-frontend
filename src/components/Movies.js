import React from "react";
import "./Movies.css"
import SearchForm from "./movies/SearchForm.js";
import MoviesCardList from "./movies/MoviesCardList.js";
import More from "./movies/More.js";
 
function Movies({ onMovieSearch, cardsData, searchData }) {
  let cards = 6;

  function handleMoreClick() {
    cards += 3;
    const arrayVisCards = Array.from(document.querySelector(".elements").children);
    const visCards = arrayVisCards.slice(0, cards);
    console.log(arrayVisCards.length);

    visCards.forEach(el => el.classList.add("visible"));

    if(visCards.length === arrayVisCards.length || arrayVisCards.length === 0) {
      document.querySelector(".more-title").style.display = "none";
    }
  }

  return (
    <>
    <section className="movies">
        <SearchForm onMovieSearchr={onMovieSearch} />
        <MoviesCardList 
        cardsData={cardsData}
        searchData={searchData}
        />
        <More searchData={searchData} handleMoreClick={handleMoreClick} />
    </section>
    </>
  ); 
}

export default Movies; 