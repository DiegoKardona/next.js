import React from "react";

import "./OurPurpose.scss";

const OurPurpose = () => {
  return (
    <div id="our-purpose">
      <div className="container section">
        <h1>Nuestro propósito</h1>
        <p>
          Parte del enfoque sistémico hacia la integralidad del ser y su
          desarrollo en los diferentes contextos. Buscando a través de la
          calidad de nuestros servicios, el bienestar y el desarrollo para una
          mejor sociedad.
        </p>
        <div id="our-purpose-images">
          <div
            className="image"
            style={{
              backgroundImage: `url(
                    "http://avancesconluz.org/img/proposito01.jpg"
                  )`
            }}
          />
          <div
            className="image"
            style={{
              backgroundImage: `url(
                    "http://avancesconluz.org/img/proposito02.jpg"
                  )`
            }}
          />
          <div
            className="image"
            style={{
              backgroundImage: `url(
                    "http://avancesconluz.org/img/proposito03.jpg"
                  )`
            }}
          />
          <div
            className="image"
            style={{
              backgroundImage: `url(
                    "http://avancesconluz.org/img/proposito04.jpg"
                  )`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
