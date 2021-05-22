import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  
  news,
  howToPlay,
  shop,
  lore,
  banlist,
  database,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import News from "./components/home/News";
import HowToPlay from "./components/home/HowToPlay";
import Shop from "./components/home/Shop";
import Lore from "./components/home/Lore";
import Banlist from "./components/home/Banlist";
import Database from "./components/home/Database";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {news.show && (
        <News

        />
      )}
      {howToPlay.show && (
        <HowToPlay

        />
      )}
      {shop.show && (
        <Shop

        />
      )}
      {lore.show && (
        <Lore

        />
      )}
      {banlist.show && (
        <Banlist

        />
      )}
      {database.show && (
        <Database

        />
      )}

      {/* {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          manualProjects={manualProjects}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          skills={skills.skills}
        />
      )} */}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
      </Footer>
    </BrowserRouter>
  );
};

export default App;
