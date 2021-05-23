import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const News = ({ heading, news }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden" id="news">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

        </Container>
    </Jumbotron>
    </div>
  );
};

export default News;
