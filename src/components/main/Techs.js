import React from "react";
import "./Techs.css"
 
function Techs() {
  return (
      <section className="techs">
        <h3 className="techs__title">Технологии</h3>
        <h2 class="techs__subtitle">7 технологий</h2>
        <p class="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        <div class="techs__logo-zone">
        <a href="https://developer.mozilla.org/ru/docs/Web/HTML" class="tech__link" target="_blank" rel="noreferrer">HTML</a>
        <a href="https://developer.mozilla.org/ru/docs/Web/CSS" class="tech__link" target="_blank" rel="noreferrer">CSS</a>
        <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" class="tech__link" target="_blank" rel="noreferrer">JS</a>
        <a href="https://clck.ru/33CCbf" class="tech__link" target="_blank" rel="noreferrer">React</a>
        <a href="https://clck.ru/33CCd7" class="tech__link" target="_blank" rel="noreferrer">Git</a>
        <a href="https://clck.ru/33CCeg" class="tech__link" target="_blank" rel="noreferrer">Express.js</a>
        <a href="https://clck.ru/33CCfY" class="tech__link" target="_blank" rel="noreferrer">mongoDB</a>
        </div>
      </section>
  ); 
}

export default Techs; 