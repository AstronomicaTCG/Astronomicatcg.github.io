import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link as ReactLink} from 'react-router-dom';
import { mainBody, news, howToPlay, shop, lore, banlist, database } from "../editable-stuff/config.js";

const Navigation = (props) => {
  const path = process.env.REACT_APP_FOR_PATH;
  return (
    <Navbar
      className={` fixed-top  ${
        "navbar-white"
      }`}
      expand="lg"
    >
      <ReactLink
        className="brand"
        to={path + "/"}
      >
        {`<${mainBody.home} />`}
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
              How to Play
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
