import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Banlist = ({ heading }) => {
  return (
  <div className="page">
    <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="banlist">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <h3 className="tbdText pb-5 text-center">pokefielder#0034</h3>
        <br></br>
        <br></br>
      </Container>
    </Jumbotron>
  </div>
  );
};

export default Banlist;
