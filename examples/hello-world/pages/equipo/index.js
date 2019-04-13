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
        <div className="section container">
          <h1>Equipo de profesionales</h1>
          <ul>
            <li>Magister en terapia familiar</li>
            <li>Coaching</li>
            <li>Médicos</li>
            <li>Enfermeras</li>
            <li>Trabajadores Sociales</li>
            <li>Abogados especialistas en derecho de familia</li>
            <li>Abogados conciliadores en derecho</li>
            <li>Especialistas en neuro psicopedagogía</li>
            <li>Psicólogos</li>
            <li>Licenciados en educación</li>
            <li>Sociólogos</li>
          </ul>
        </div>
        <Footer />
      </Layout>
    );
  }
}
