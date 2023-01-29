import React from "react";
import "./More.css"

function More({ handleMoreClick, searchData }) {

  if(searchData) {
    return (
          <p className="more-title" onClick={handleMoreClick} >Еще</p>
    );
  }
}

export default More;