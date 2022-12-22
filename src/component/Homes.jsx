import React from "react";

import Navbar from "./Navbars"
import Jumbotron from "./Jumbotrons";
import Card from "./Card";
import Footer from "./Footers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col-4 my-3">
            <Card />
          </div>
          <div className="col-4 my-3">
            <Card />
          </div>
          <div className="col-4 my-3">
            <Card />
          </div>
          <div className="col-4 my-3">
            <Card />
          </div>
          <div className="col-4 my-3">
            <Card />
          </div>
          <div className="col-4 my-3">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
