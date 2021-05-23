import React from "react";
import ReactPlayer from 'react-player/youtube';
import { Jumbotron, Container } from "react-bootstrap";

const HowToPlay = ({ heading }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden" id="howToPlay">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

        <div className="d-flex justify-content-center align-items-center flex-wrap m-0 overflow-hidden">
          <ReactPlayer url={"https://www.youtube.com/watch?v=FDY4ca5ej0U&ab_channel=AetherGames"} />
        </div>
        </Container>
    </Jumbotron>
  </div>
  );
};

export default HowToPlay;
