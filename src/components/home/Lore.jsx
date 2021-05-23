import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Lore = ({ heading }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden" id="lore">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

        </Container>
    </Jumbotron>
  </div>
  );
};

export default Lore;
