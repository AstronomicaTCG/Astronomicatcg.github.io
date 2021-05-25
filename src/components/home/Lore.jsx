import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import ReactPlayer from 'react-player/youtube';

const Lore = ({ heading, url, playlistLink, loreTextItems }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="lore">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

          <div className="howToPlayBody">

            <div className="videoAndTextModule">
              <ReactPlayer url={url} />
              <Button variant="dark" className="linkText" target="_blank" rel="noopener noreferrer" href={playlistLink}>Click Here to Watch All Beneath the Cards Episodes</Button>
            </div>

            <div className="loreText">
              <h4>A Quick Summary of Astronomica Lore</h4>
              <div className="loreTextScroller">
                {loreTextItems.map((loreItem, index) => (
                  <p>{loreItem}</p>
                ))}
              </div>
            </div>
            

          </div>

        </Container>
    </Jumbotron>
  </div>
  );
};

export default Lore;
