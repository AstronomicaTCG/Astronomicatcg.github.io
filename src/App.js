import React from "react";
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
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

const App = () => {
  const titleRef = React.useRef(0);
  const path = process.env.REACT_APP_FOR_PATH;
  return (
    <Router baseline="/">
      {navBar.show && <Navbar ref={titleRef}/>}
      <Switch>

        <Route exact path="/">
          <Redirect to={path + "/"}></Redirect>
        </Route>

        <Route exact path={path + "/"} render={() => 
          <MainBody
            gradient={mainBody.gradientColors}
            title={`${mainBody.firstName}`}
            message={mainBody.message}
            icons={mainBody.icons}
          />
        }/>

        <Route exact path={path + "/news"} render={() => 
          <News          
            heading={news.heading}
            news={news.news}
          />
        }/>

        <Route exact path={path + "/howToPlay"} render={() => 
          <HowToPlay          
            heading={howToPlay.heading}
            url={howToPlay.url}
            pdfRulebook={howToPlay.pdfRulebook}
            pdfBeginnerGuide={howToPlay.pdfBeginnerGuide}
            text={howToPlay.text}
          />
        }/>
        
        <Route exact path={path + "/shop"} render={() => 
          <Shop          
            heading={shop.heading}
            items={shop.items}
          />
        }/>
        
        <Route exact path={path + "/lore"} render={() => 
          <Lore          
            heading={lore.heading}
            url={lore.url}
            playlistLink={lore.playlistLink}
            loreTextItems={lore.loreTextItems}
          />
        }/>
        
        <Route exact path={path + "/banlist"} render={() => 
          <Banlist          
            heading={banlist.heading}
          />
        }/>
        
        <Route exact path={path + "/database"} render={() => 
          <Database          
            heading={database.heading}
          />
        }/>

      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default App;
