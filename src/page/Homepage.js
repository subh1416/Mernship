import React from "react";
import "./homepage.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/cards/Cards";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homeheader">
        <Header />
      </div>
      <div className="homemain">
        <section className=" alpha w-75 mx-auto box-shadow">
          <div className="p-4 w-50">
            <h2 className="my-3">About V-lab</h2>
            <p className="">
              Virtual Lab is a tool for distance learning and performing
              experiments using simulations that allow students to understand
              the concepts in a better way. This tool is very useful when
              students are unable to perform the experiments physically due to
              various reasons like lockdown or high cost of the experimental
              setup.
            </p>
          </div>
          <img
            className="p-2 w-75"
            src="https://vakilsearch.com/blog/wp-content/uploads/2023/02/aaple-sarkar-1.png"
            alt="ll"
          />
        </section>

        <section className="bl23">
          <Cards />
        </section>
      </div>
      <div className="homefooter">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
