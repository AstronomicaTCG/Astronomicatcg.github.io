import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link as ReactLink} from 'react-router-dom';
import { news, howToPlay, shop, lore, banlist, database } from "../editable-stuff/config.js";

const Navigation = (props) => {
  const path = process.env.REACT_APP_FOR_PATH;
  return (
    <Navbar
      className={` fixed-top  ${
        "navbar-white"
      }`}
    >
      <ReactLink
        className="nav-link lead" 
        to={path + "/"}
      >
        <div
          style={{fontWeight: "normal", color: "#363636", fontSize: "20px"}}
        >
          [Home]
        </div>
      </ReactLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {news.show && (
            <ReactLink
              className="nav-link lead" 
              to={path + "/news"}
            >
              News
            </ReactLink>
          )}
          {howToPlay.show && (
            <ReactLink
              className="nav-link lead"
              to={path + "/howToPlay"}
            >
              Play
            </ReactLink>
          )}
          {shop.show && (
            <ReactLink
              className="nav-link lead"
              to={path + "/shop"}
            >
              Shop
            </ReactLink>
          )}
          {lore.show && (
            <ReactLink
              className="nav-link lead"
              to={path + "/lore"}
            >
              Lore
            </ReactLink>
          )}
          {banlist.show && (
            <ReactLink
              className="nav-link lead"
              to={path + "/banlist"}
            >
              Banlist
            </ReactLink>
          )}
          {database.show && (
            <ReactLink
              className="nav-link lead"
              to={path + "/database"}
            >
              Database
            </ReactLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
