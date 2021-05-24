import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import YouTubePlaylist from 'react-youtube-playlist';
import 'react-youtube-playlist/dist/styles';

const Lore = ({ heading }) => {
  return (
    <div>
      <Jumbotron fluid className="bg-white m-0 overflow-hidden pageHeading" id="lore">
        <Container className="p-5 ">
          <h2 className="display-4 pb-5 text-center">
            {heading}
          </h2>

          <YouTubePlaylist
            width={'85%'}
            height={390}
            api_key='YourGoogleApiKey'
            playlist_id='YourYoutubePlaylistID'
            show_thumbnails
          />

        </Container>
    </Jumbotron>
  </div>
  );
};

export default Lore;
