import React from "react";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component


export const Home = () => {

  const styleDiv = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return (
    <div style={styleDiv}>
      <div className="mx-5 my-5 px-5 pt-5">
        <jumbotron />
        <div className="row text-center">
          
          <div className="col-sm-3">
            <Card
              imageUrl="https://via.placeholder.com/500x325"
              cardTitle="Card Title"
              content="It is a long established fact that a reader 
							will be distracted by the readable content of a page when 
							looking at its layout."
              url="#"
              label="Find Out More!"
            />
          </div>

          <div className="col-sm-3">
            <Card
              imageUrl="https://via.placeholder.com/500x325"
              cardTitle="Card Title"
              content="There are many variations of passages of 
							Lorem Ipsum available, but the majority have suffered 
							alteration in some form, "
              url="#"
              label="Find Out More!"
            />
          </div>

          <div className="col-sm-3">
            <Card
              imageUrl="https://via.placeholder.com/500x325"
              cardTitle="Card Title"
              content="Lorem ipsum dolor sit amet, consectetur 
							adipiscing elit, sed do eiusmod tempor incididunt ut labore 
							et dolore magna aliqua."
              url="#"
              label="Find Out More!"
            />
          </div>

          <div className="col-sm-3">
            <Card
              imageUrl="https://via.placeholder.com/500x325"
              cardTitle="Card Title"
              content="Sed ut perspiciatis unde omnis iste natus 
							error sit voluptatem accusantium doloremque laudantium."
              url="#"
              label="Find Out More!"
            />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
