import React from "react";
import ReactPlayer from 'react-player/youtube';
import { Jumbotron, Container } from "react-bootstrap";

const HowToPlay = ({ heading, url, text }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="howToPlay">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

        <div className="howToPlayBody">
          <div><ReactPlayer url={url} /></div>
          <div>{text}</div>
        </div>
        
        </Container>
    </Jumbotron>
  </div>
  );
};

export default HowToPlay;
