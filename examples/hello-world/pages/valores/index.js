import { Component } from "react";

import "./styles.scss";

import Layout from "../../utilities/Layout";

import Header from "../components/header/Header";
import PrincipalHero from "./components/principalHero/PrincipalHero";
import OurPurpose from "./components/ourPurpose/OurPurpose";
import Footer from "../components/footer/Footer";

export default class extends Component {
  render() {
    return (
      <Layout
        title="Valores - Corporación Avances con Luz: Tu bienestar nos permite avanzar."
        page="valores"
      >
        <Header />
        <PrincipalHero />
        <OurPurpose />
        <Footer />
      </Layout>
    );
  }
}
