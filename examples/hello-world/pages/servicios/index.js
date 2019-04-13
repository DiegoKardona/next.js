import { Component } from "react";

import "./styles.scss";

import Layout from "../../utilities/Layout";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default class extends Component {
  render() {
    return (
      <Layout
        title="Servicios - Corporación Avances con Luz: Tu bienestar nos permite avanzar."
        page="services"
      >
        <Header />
        <div
            id="services-principal-image"
            style={{
              backgroundImage: `url(
                    "http://avancesconluz.org/img/servicios01.jpg"
                  )`
            }}
          >
          <div id="valores-gradient" />
          </div>
        <div className="container section">
          <h1>Servicios</h1>
          <ul>
            <li>Encuentro de parejas</li>
            <li>Terapias individuales, familiares y grupales</li>
            <li>Seminarios, cursos, diplomados</li>
            <li>Talleres de crecimiento personal y empresarial</li>
            <li>
              Capacitaciones y talleres para instituciones educativas para
              escuelas de padres la comunidad educativa.
            </li>
            <li>Acompañamiento y ejecución de actividades lúdicas, recreativas, culturales según la necesidad del servicio.
</li><li>Capacitación para la elaboración del manual de convivencia escolar
</li>
<li>Riesgos laborales</li>
          </ul>
        </div>
        <Footer />
      </Layout>
    );
  }
}
