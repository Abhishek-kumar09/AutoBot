import React from "react";
import heroBg from "../../assets/img/hero-bg.gif";
import Header from "../../components/Header/Header";
import "./Home.scss";

export default function Home({ user }) {
  return (
    <div id="home">
      <Header user={user} />
      <section id="hero">
        <div>
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
            <a href="#why-autobot">
              <button className="block round">Why Auto Bot</button>
            </a>
          </div>
        </div>
        <div>
          <img src={heroBg} alt="loading..." />
        </div>
      </section>
      {/*<div className="divider" />*/}
      <section id="why-autobot">
        <h2>Why Auto Bot</h2>
        <h3>
          Getting the dataset that matches the criteria for your Machine
          Learning Model is hard. We get it. That is why we create Auto Bot to
          help your buy/auction/sell the dataset of your choices.
        </h3>
      </section>
    </div>
  );
}

export function Card({ image, title, description, btn }) {
  return <div></div>;
}
