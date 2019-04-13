import { Component } from "react";

import "./styles.scss";

import Layout from "../../utilities/Layout";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default class extends Component {
  render() {
    return (
      <Layout
        title="Misión y Visión - Corporación Avances con Luz: Tu bienestar nos permite avanzar."
        page="valores"
      >
        <Header />
        <div id="mision">
          <div className="container section">
            <h1>Misión</h1>
            <p>
              Brindamos apoyo en la elaboración y formulación de proyectos,
              programas, actividades, tendientes a la generación de calidad y
              bienestar humano a través de la mediación, la conciliación, en pro
              del desarrollo y progreso social y empresarial
            </p>
            <div id="mision-images">
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision01.jpg"
                  )`
                }}
              />

              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision02.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision03.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision04.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision05.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/mision06.jpg"
                  )`
                }}
              />
            </div>
          </div>
        </div>

        <div id="vision">
          <div className="container section">
            <h1>Visión</h1>
            <p>
              En el año 2020, será reconocida en el municipio de Bello, el
              Departamento de Antioquia y en Colombia, por la calidad de sus
              servicios, la calidez, la responsabilidad social, ambiental,
              profesional y la sensibilidad humana proyectadas a las personas, a
              las familias y a las empresas en la búsqueda de la prosperidad.
            </p>
            <div id="vision-images">
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision01.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision02.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision03.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision04.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision05.jpg"
                  )`
                }}
              />
              <div
                className="image"
                style={{
                  backgroundImage: `url(
                    "http://avancesconluz.org/img/misionvision/vision06.jpg"
                  )`
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}
