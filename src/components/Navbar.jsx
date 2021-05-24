import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, news, howToPlay, shop, lore, banlist, database } from "../editable-stuff/config.js";

const Navigation = (props) => {
  return (
    <Navbar
      className={` fixed-top  ${
        "navbar-white"
      }`}
      expand="lg"
    >
      <Navbar.Brand 
        className="brand"
        href={process.env.PUBLIC_URL + "/home"}
      >
        {`<${mainBody.home} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {news.show && (
            <Nav.Link
              className="nav-link lead" 
              href={process.env.PUBLIC_URL + "/news"}
            >
              News
            </Nav.Link>
          )}
          {howToPlay.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/howToPlay"}
            >
              How to Play
            </Nav.Link>
          )}
          {shop.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/shop"}
            >
              Shop
            </Nav.Link>
          )}
          {lore.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/lore"}
            >
              Lore
            </Nav.Link>
          )}
          {banlist.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/banlist"}
            >
              Banlist
            </Nav.Link>
          )}
          {database.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/database"}
            >
              Database
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
