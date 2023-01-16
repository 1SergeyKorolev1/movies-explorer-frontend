import React from "react";
import "./Portfolio.css"
 
function Portfolio() {
  return (
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <a class="portfolio__link" href="https://1sergeykorolev1.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
        <a class="portfolio__link" href="https://1sergeykorolev1.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        <a class="portfolio__link" href="https://1sergeykorolev1.github.io/mesto/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
      </section>
  ); 
}

export default Portfolio; 