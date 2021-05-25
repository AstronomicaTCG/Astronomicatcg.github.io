import React from "react";
import ReactPlayer from 'react-player/youtube';
import { Jumbotron, Container, Button } from "react-bootstrap";

const HowToPlay = ({ heading, url, pdfRulebook, pdfBeginnerGuide, text }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="howToPlay">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

        <div className="howToPlayBody">
          <div className="howToPlayLeftColumn">
            <ReactPlayer url={url} />
            <Button variant="dark" className="linkText" target="_blank" rel="noopener noreferrer" href={pdfRulebook}>PDF Download (Full Rulebook)</Button>
            <Button variant="dark" className="linkText" target="_blank" rel="noopener noreferrer" href={pdfBeginnerGuide}>PDF Download (Beginner's Guide)</Button>
            </div>
          <div className="howToPlayRightColumn">
            {text.map((textItem, index) => (
              <div className={(text.indexOf(textItem) === 0 || text.indexOf(textItem) === 5) ? "howToPlayTextHeading" : "howToPlayTextBody"}>{textItem}</div>
            ))}
          </div>
        </div>
        
        </Container>
    </Jumbotron>
  </div>
  );
};

export default HowToPlay;
