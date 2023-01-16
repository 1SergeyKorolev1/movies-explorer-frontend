import React from "react";
import "./MoviesCardList.css"
import Card from "./MoviesCard.js";

function MoviesCardList({ checked }) {

  return (
      <section className="elements">
          <Card onCheck={checked}/>
          <Card onCheck={checked}/>
          <Card onCheck={checked}/>
          <Card onCheck={checked}/>
          <Card onCheck={checked}/>
          <Card onCheck={checked}/>
      </section>
  );
}

export default MoviesCardList;