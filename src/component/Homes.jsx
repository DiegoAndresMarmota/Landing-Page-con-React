import React from "react";

import Navbars from "./Navbars"
import Jumbotrons from "./Jumbotrons";
import Cards from "./Cards";
import Footers from "./Footers";

const Homes = () => {
  return (
    <>
      <Navbars />
      <Jumbotrons />
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col-4 my-3">
            <Cards />
          </div>
          <div className="col-4 my-3">
            <Cards />
          </div>
          <div className="col-4 my-3">
            <Cards />
          </div>
          <div className="col-4 my-3">
            <Cards />
          </div>
          <div className="col-4 my-3">
            <Cards />
          </div>
          <div className="col-4 my-3">
            <Cards />
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Homes;
