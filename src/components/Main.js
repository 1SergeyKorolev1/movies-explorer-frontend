import React from "react";
import "./Main.css"
import Promo from "./main/Promo.js"
import AboutProject from "./main/AboutProject.js"
 
function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
    </main>
  ); 
}

export default Main; 