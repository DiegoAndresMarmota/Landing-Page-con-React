import React from "react";

const styleFooter = {
  marginTop: "auto",
};

export const Footer = () => {
  return (
    <footer className="py-5 bg-dark footer" style={styleFooter}>
      <div className="container-fluid">
        <p className="m-auto text-center text-white">
          Copyright © Your Website 2022
        </p>
      </div>
    </footer>
  );
};
