import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
  return (
    <BrowserRouter>
      {navBar.show && <Navbar ref={titleRef}/>}
      <Switch>

        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>

        <Route exact path="/home" render={() => 
          <MainBody
            gradient={mainBody.gradientColors}
            title={`${mainBody.firstName}`}
            home={mainBody.home}
            message={mainBody.message}
            icons={mainBody.icons}
          />
        }/>

        <Route exact path="/news" render={() => 
          <News          
            heading={news.heading}
            news={news.news}
          />
        }/>

        <Route exact path="/howToPlay" render={() => 
          <HowToPlay          
            heading={howToPlay.heading}
            url={howToPlay.url}
          />
        }/>
        
        <Route exact path="/shop" render={() => 
          <Shop          
            heading={shop.heading}
          />
        }/>
        
        <Route exact path="/lore" render={() => 
          <Lore          
            heading={lore.heading}
          />
        }/>
        
        <Route exact path="/banlist" render={() => 
          <Banlist          
            heading={banlist.heading}
          />
        }/>
        
        <Route exact path="/database" render={() => 
          <Database          
            heading={database.heading}
          />
        }/>

      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
