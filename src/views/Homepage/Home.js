import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import heroBg from "../../assets/img/hero-bg.gif";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <section className="hero">
        <div>
          <h2>
            <strong>The all-in-one marketplace for AI dataset</strong>
          </h2>
          <h3>
            Stop searching for your desired dataset and start building
            immediately. We provide the data on your preferences.
          </h3>
          <div className="btn-group">
            <button className="block round accent">
              Start Free! No Credit Card Required
            </button>
            <button className="block round">How it works</button>
          </div>
        </div>
        <div>
          <img src={heroBg} alt="loading..." />
        </div>
      </section>
    </div>
  );
}
