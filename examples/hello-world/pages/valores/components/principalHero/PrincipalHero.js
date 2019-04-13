import React from "react";

import "./PrincipalHero.scss";

const PrincipalHero = () => {
  return (
    <div id="principal-hero">
      <div id="right-content">
        <div
          id="valores-image"
          style={{
            backgroundImage: `url(
                    "http://avancesconluz.org//img/galeria/gal03.jpg"
                  )`
          }}
        >
          <div id="valores-gradient" />
        </div>
      </div>
      <div id="left-content">
        <div className="container">
          <h1>Nuestros valores</h1>
          <h2>Amor</h2>
          <h2>Liderazgo</h2>
          <h2>Autonomía</h2>
          <h2>Disciplina</h2>
          <h2>Respeto</h2>
          <h2>Alegría</h2>
          <h2>Pasión</h2>
          <h2>Sensibilidad social</h2>
          <h2>Prosperidad</h2>
        </div>
      </div>
    </div>
  );
};

export default PrincipalHero;
