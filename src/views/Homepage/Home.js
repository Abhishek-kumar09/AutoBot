import { Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import HowItWorks from "components/HowItWorks";
import React from "react";
import { HashLink } from "react-router-hash-link";
import heroBg from "../../assets/img/hero-bg.gif";
import Header from "../../components/Header/Header";
import "./Home.scss";

export default function Home({ user }) {
  return (
    <div id="home">
      <Header user={user} />
      <Grid container id="hero">
        <Grid item xs={12} md={5}>
          <h2>
            <strong>The all-in-one marketplace for AI dataset</strong>
          </h2>
          <h3>
            Stop searching for your desired dataset and start building
            immediately. We provide the data on your preferences.
          </h3>
          <div className="btn-group">
            <a href="/">
              <button className="block round accent">
                Start Free! No Credit Card Required
              </button>
            </a>
            <HashLink smooth to="#why-autobot">
              <button className="block round">Why Auto Bot</button>
            </HashLink>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
        >
          <img src={heroBg} alt="hero" height='100%' width="100%" />
        </Grid>
      </Grid>
      {/*<div className="divider" />*/}
      <section id="why-autobot" >
        <h2 style={{ zIndex: "2", marginTop: '100px' }}>Why Auto Bot</h2>
        <h3>
          Getting the dataset that matches the criteria for your Machine
          Learning Model is hard. We get it. That is why we create Auto Bot to
          help your buy/auction/sell the dataset of your choices.
        </h3>
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <Footer />
    </div>
  );
}

export function Card({ image, title, description, btn }) {
  return <div></div>;
}
