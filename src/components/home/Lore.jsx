import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
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
              <a className="linkText" href={playlistLink}>Click Here to View Beneath the Cards Playlist</a>
            </div>

            <div className="loreText">
              <h4>Astronomica Lore - A Quick Summary</h4>
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
