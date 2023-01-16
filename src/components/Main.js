import React from "react";
import "./Main.css"
import Promo from "./main/Promo.js"
import AboutProject from "./main/AboutProject.js"
import Techs from "./main/Techs.js"
import AboutMe from "./main/AboutMe.js"
import Portfoli from "./main/Portfolio.js"
 
function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfoli />
    </main>
  ); 
}

export default Main; 