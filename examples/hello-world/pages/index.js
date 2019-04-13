import { Component } from "react";

import "./styles.scss";

import Layout from "../utilities/Layout";

import Header from "./components/header/Header";
import PrincipalHero from "./components/principalHero/PrincipalHero";
import AboutUsSection from "./components/aboutUsSection/AboutUsSection";
import OurWorkSection from "./components/ourWorkSection/OurWorkSection";
import Footer from "./components/footer/Footer";

export default class extends Component {
  render() {
    return (
      <Layout
        title="Inicio - Corporación Avances con Luz: Tu bienestar nos permite avanzar."
        page="home"
      >
        <Header />
        <PrincipalHero />
        <AboutUsSection />
        <OurWorkSection />
        <Footer />
      </Layout>
    );
  }
}
