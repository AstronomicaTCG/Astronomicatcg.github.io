import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const News = ({ heading, news }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="news">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>
          <h3 className="tbdText pb-5 text-center">TBD</h3>
          <br></br>
          <br></br>
        </Container>
    </Jumbotron>
    </div>
  );
};

export default News;
