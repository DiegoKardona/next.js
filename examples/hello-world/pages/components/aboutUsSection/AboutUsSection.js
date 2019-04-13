import React from "react";

import "./AboutUsSection.scss";

const AboutUsSection = () => {
  return (
    <div id="about-us-section">
      <div className="container section">
        <h1>¿Quienes somos?</h1>
        <p>
          La Corporación Avances con Luz es una institución sin ánimo de lucro
          que surge como una alternativa a la comprensión e interpretación de
          las necesidades, dificultades y retos que se presentan a nivel
          empresarial, cultural, educativo y en los diferentes contextos en los
          cuales se desarrolla y progresa una sociedad. Contamos con un equipo
          de especialistas en varias disciplinas, de alta calidad humana,
          idóneos, competentes dispuestos a brindar soluciones inmediatas y
          asertivas bajo unos parámetros legales de calidad, eficacia y
          eficiencia, que permitan a nivel individual, familiar o empresarial
          tomar las mejores decisiones, amigables y competentes.
        </p>

        <div id="descriptive-images">
          <img src="http://avancesconluz.org/img/galeria/gal01.jpg" />
          <img src="http://avancesconluz.org/img/galeria/gal02.jpg" />
          <img src="http://avancesconluz.org/img/galeria/gal03.jpg" />
          <img src="http://avancesconluz.org/img/galeria/gal04.jpg" />
          <img src="http://avancesconluz.org/img/galeria/gal05.jpg" />
          <img src="http://avancesconluz.org/img/galeria/gal06.jpg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
