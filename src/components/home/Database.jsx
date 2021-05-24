import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Database = ({ heading }) => {
  return (
  <div>
    <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="database">
      <Container className="p-5 ">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>

        <img src="https://cdn.discordapp.com/attachments/656673917007822849/718917786092699698/UntapNevx.png"></img>
      </Container>
    </Jumbotron>
  </div>
  );
};

export default Database;
