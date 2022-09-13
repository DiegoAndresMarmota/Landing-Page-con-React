import React from "react";

export const Footer = () => {
  const styleFooter = {
    marginTop: "auto",
  };

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
